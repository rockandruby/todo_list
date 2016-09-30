class Task < ApplicationRecord
  belongs_to :project
  has_many :comments
  acts_as_list scope: :project

  validates :title, presence: true
end
