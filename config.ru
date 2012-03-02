require 'rubygems'
require 'bundler/setup'
require 'rack-livereload'

Bundler.require(:default)
use Rack::LiveReload

require 'nesta/app'

Nesta::App.root = ::File.expand_path('.', ::File.dirname(__FILE__))
run Nesta::App
