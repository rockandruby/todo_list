FactoryGirl.define do
  factory :comment do
    title FFaker::Lorem.sentence
    task
  end
end
