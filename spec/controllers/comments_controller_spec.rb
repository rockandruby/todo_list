require 'rails_helper'

RSpec.describe CommentsController, type: :controller do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:task) { project.tasks.take }

  before(:each) do
    set_ability
    sign_in_user
  end

  it 'should create new comment' do
    comment_ability
    expect do
      post :create, project_id: project.id, task_id: task.id,
           comment: attributes_for(:comment)
    end.to change { task.comments.size }.by(1)
  end

  it 'should delete comment' do
    comment_ability
    expect do
      delete :destroy, project_id: project.id, task_id: task.id,
             id: task.comments.take.id
    end.to change { task.comments.size }.by(-1)
  end
end
