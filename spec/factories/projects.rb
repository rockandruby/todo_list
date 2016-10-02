FactoryGirl.define do
  factory :project do
    title FFaker::Lorem.sentence

    after(:create) do |project|
      task = create(:task, project: project)
      create(:comment, task: task)
    end

  end
end
