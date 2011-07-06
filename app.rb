require "compass"

ROOT = File.dirname(__FILE__)

module Nesta
  class App

    use Rack::Static, :urls => ["/assets"], :root => "public"
    
    def production?
      environment == :production
    end

    def local_stylesheet?
      File.exist?(File.expand_path('views/scss/local.sass', ROOT))
    end

    helpers do
      def partial(template, *args)
        template_array = template.to_s.split('/')
        template = template_array[0..-2].join('/') + "/_#{template_array[-1]}"
        options = args.last.is_a?(Hash) ? args.pop : {}
        options.merge!(:layout => false)
        if collection = options.delete(:collection) then
          collection.inject([]) do |buffer, member|
            buffer << erb(:"#{template}", options.merge(:layout => false, :locals => {template_array[-1].to_sym => member}))
          end.join("\n")
        else
          haml(:"#{template}", options)
        end
      end
    end

    configure do
      Compass.configuration do |config|
        # config.project_path = File.dirname(__FILE__)
        # config.sass_dir = "scss"
        config.output_style = production? ? :compressed : :expanded
        config.line_comments = production? ? false : true
      end
    
      set :scss, Compass.sass_engine_options
      # set :views, File.expand_path('scss', File.dirname(__FILE__))
    end

    get '/css/local.css' do
      content_type 'text/css', :charset => 'utf-8'
      cache sass(:"scss/local")
    end

    get '/css/:name.css' do
      content_type 'text/css', :charset => 'utf-8'
      cache scss(:"scss/#{params[:name].to_sym}")
    end

    get '*.css' do
      parts = params[:splat].map { |p| p.sub(/\/$/, '') }
      
      content_type 'text/css', :charset => 'utf-8'
      cache scss(:"../content/pages#{File.join(parts)}")
    end

  end
end
