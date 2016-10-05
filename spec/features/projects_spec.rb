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
    click_on 'Add project'
    expect(page).to have_content('added')
  end

  scenario 'Delete project', :js do
    find(:css, '.project', match: :first).find('.delete').click
    expect(page).to have_content('deleted')
  end

  scenario 'Edit project', :js do
    find(:css, '.project', match: :first).find('.edit').click
    fill_in 'edit_project_body', with: FFaker::Lorem.sentence
    click_on 'Edit project'
    expect(page).to have_content('updated')
  end

end