require 'capybara/poltergeist'

RSpec.configure do |config|
  config.infer_spec_type_from_file_location!
  Capybara.javascript_driver = :poltergeist
end