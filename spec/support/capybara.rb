RSpec.configure do |config|
  config.infer_spec_type_from_file_location!
  Capybara.server_port = 3000
  Capybara.app_host = "http://localhost:%d" % Capybara.server_port

  Capybara.default_driver = :webkit
  Capybara.javascript_driver = :webkit

  Capybara::Webkit.configure do |config|
    config.debug = true
    config.allow_unknown_urls
  end
end