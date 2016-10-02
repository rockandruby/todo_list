require 'rails_helper'

RSpec.describe ProjectsController, type: :controller do
  before(:each) do
    let(:user){ create(:user)}
    sign_in user
  end

end
