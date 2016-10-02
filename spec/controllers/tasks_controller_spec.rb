require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:task) { project.tasks.take }

  before(:each) do
    set_ability
    sign_in_user
    create_list(:task, 10, project: project)
  end

  it 'should create new task' do
    task_ability
    expect do
      post :create, project_id: project.id, task: attributes_for(:task)
    end.to change { project.tasks.size }.by(1)
  end

  it 'should update task' do
    task_ability
    put :update, project_id: task.project_id, id: task.id, task: attributes_for(:task)
    expect(response).to be_success
  end

  it 'should destroy task' do
    task_ability
    expect do
      delete :destroy, project_id: task.project_id, id: task.id
    end.to change { project.tasks.size }.by(-1)
  end

  it 'should change task position' do
    task_ability
    patch :prioritise, project_id: task.project_id, id: task.id
    expect(response).to be_success
  end
end
