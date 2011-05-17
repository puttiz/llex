require "compass"

module Nesta
  class App

    use Rack::Static, :urls => ["/assets"], :root => "themes/llex/public"

    configure do
      Compass.configuration do |config|
        config.project_path = File.dirname(__FILE__)
        config.sass_dir = "scss"
        # config.output_style = :compact
      end
      
      set :haml, { :format => :html5 }
      set :sass, Compass.sass_engine_options
    end

    helpers do
      # Add new helpers here.
    end

    get '/assets/c/:name.css' do
      content_type 'text/css', :charset => 'utf-8'
      sass :params[:name].to_sym
    end
    
  end
end
