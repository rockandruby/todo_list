require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:task) { project.tasks.take }

  before(:each) do
    set_ability
    sign_in_user
  end

  it 'should create new task' do
    task_ability
    expect do
      post :create, params: {project_id: project.id, task: attributes_for(:task)}
    end.to change { project.tasks.size }.by(1)
  end

  it 'should update task' do
    task_ability
    expect(put :update, params: {project_id: task.project_id,
                                 id: task.id, task: attributes_for(:task)}).to be_success
  end

  it 'should destroy task' do
    task_ability
    expect do
      delete :destroy, params: {project_id: task.project_id, id: task.id}
    end.to change { project.tasks.size }.by(-1)
  end

  it 'should change task position' do
    task_ability
    patch :prioritise, params: {project_id: task.project_id, id: task.id}
    expect(response).to be_success
  end
end
