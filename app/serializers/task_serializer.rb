class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :deadline, :is_done, :position, :project_id, :created_at

  belongs_to :project_id
end
