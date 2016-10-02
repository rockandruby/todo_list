require 'ffaker'

FactoryGirl.define do
  factory :task do
    title FFaker::Lorem.sentence
    project
  end
end
