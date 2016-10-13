class Comment < ApplicationRecord
  belongs_to :task
  validates :title, presence: true

  mount_uploader :file, FileUploader
end
