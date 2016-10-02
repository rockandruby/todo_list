RSpec.configure do |config|
  config.infer_spec_type_from_file_location!
  Capybara.javascript_driver = :webkit
  Capybara::Webkit.configure do |config|
    config.allow_url("fonts.googleapis.com")
    config.allow_url("static.xx.fbcdn.net")
  end

end