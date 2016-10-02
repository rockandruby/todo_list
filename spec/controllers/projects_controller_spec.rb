require 'rails_helper'

RSpec.describe ProjectsController, type: :controller do
  let(:user) { create(:user) }
  let(:projects) { user.projects }

  before(:each) do
    sign_in_user
    create_list(:project, 10, user: user)
  end

  it 'should return all user projects' do
    get :index
    expect(json.size).to eq(10)
  end

  it 'should create new project' do
    expect { post :create, project: attributes_for(:project) }.to change { projects.size }.by(1)
  end

  it 'should destroy project' do
    expect { delete :destroy, id: projects.take.id }.to change { projects.size }.by(-1)
  end

end
