class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :deadline, :is_done, :position
  has_many :comments
  belongs_to :project_id
end
