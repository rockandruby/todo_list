FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "person#{n}@example.com" }
    name FFaker::Name.name
    password 1234
    password_confirmation 1234
  end
end
