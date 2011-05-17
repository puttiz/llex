require "compass"

module Nesta
  class App

    use Rack::Static, :urls => ["/assets"], :root => "themes/llex/public"

    configure do
      Compass.configuration do |config|
        # config.project_path = File.dirname(__FILE__)
        # config.sass_dir = "scss"
        # config.output_style = :compact
        # config.line_comments = false
      end
    
      set :scss, Compass.sass_engine_options
      # set :views, File.expand_path('scss', File.dirname(__FILE__))
    end

    get '/css/:name.css' do
      content_type 'text/css', :charset => 'utf-8'
      cache scss(params[:name].to_sym)
    end
    
  end
end
