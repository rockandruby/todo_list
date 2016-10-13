RSpec.configure do |config|
  config.infer_spec_type_from_file_location!

  Capybara.default_driver = :webkit
  Capybara.javascript_driver = :webkit

  Capybara::Webkit.configure do |config|
    config.debug = true
    config.allow_unknown_urls
  end
end