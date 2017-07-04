module Redactor2
  module Rails
    class Engine < ::Rails::Engine
      initializer 'redactor2.assets.precompile', group: :all do |app|
        app.config.assets.paths << root.join('vendor/assets/javascripts/redactor')
        app.config.assets.paths << root.join('vendor/assets/stylesheets/redactor')
      end
    end
  end
end
