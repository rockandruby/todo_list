require 'rails_helper'
require "cancan/matchers"

RSpec.describe Ability, type: :model do
  let(:ability) { Ability.new(user) }
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:task) { create(:task, project: project) }
  let(:comment) { create(:comment, task: task) }

  context 'Able to manage owned resources. ' do
    it { expect(ability).to be_able_to(:manage, project) }
    it { expect(ability).to be_able_to(:manage, task) }
    it { expect(ability).to be_able_to(:manage, comment) }
  end

  context 'disable to manage alien resources' do
    it { expect(ability).not_to be_able_to(:manage, create(:project)) }
    it { expect(ability).not_to be_able_to(:manage, create(:task)) }
    it { expect(ability).not_to be_able_to(:manage, create(:comment)) }
  end
end
