class Task < ApplicationRecord
  belongs_to :project
  has_many :comments, dependent: :destroy
  acts_as_list scope: :project

  validates :title, presence: true
end
