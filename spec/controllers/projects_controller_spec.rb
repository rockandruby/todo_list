require 'rails_helper'

RSpec.describe ProjectsController, type: :controller do
  let(:user) { create(:user) }
  let(:projects) { user.projects }

  before(:each) do
    set_ability
    sign_in_user
    create_list(:project, 10, user: user)
  end

  it 'should return all user projects' do
    project_ability
    get :index
    expect(json.size).to eq(10)
  end

  it 'should create new project' do
    project_ability
    expect { post :create, project: attributes_for(:project) }.to change { projects.size }.by(1)
  end

  it 'should update project' do
    project_ability
    post :update, id: projects.take.id, project: attributes_for(:project)
    expect(response).to be_success
  end

  it 'should destroy project' do
    project_ability
    expect { delete :destroy, id: projects.take.id }.to change { projects.size }.by(-1)
  end

end
