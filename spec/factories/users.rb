FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "person#{n}@example.com" }
    name FFaker::NameMX.full_name
    password FFaker::Internet.password
  end
end
