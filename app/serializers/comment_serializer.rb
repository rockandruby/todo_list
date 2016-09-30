class CommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :file
  belongs_to :task_id
end
