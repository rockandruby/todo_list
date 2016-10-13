require 'rails_helper'

RSpec.feature "Projects", type: :feature do
  background do
    create_pair(:project, user: user)
    visit '/'
    login_user(user)
  end

  given(:user) { create(:user) }

  scenario 'Add project', :js do
    click_on 'Add TODO list'
    fill_in 'add_project_body', with: FFaker::Lorem.sentence
    expect { click_on 'Add project' }.to change { sleep(1); find_all('.project').count }.by(1)
  end

  scenario 'Delete project', :js do
    expect do
      find(:css, '.project', match: :first).find('.delete').click
    end.to change { sleep 1; find_all('.project').count }.by(-1)
  end

  scenario 'Edit project', :js do
    find(:css, '.project', match: :first).find('.edit').click
    fill_in 'edit_project_body', with: FFaker::Lorem.sentence
    click_on 'Edit project'
    expect(page).to have_content('updated')
  end

end
