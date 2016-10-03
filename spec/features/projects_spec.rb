require 'rails_helper'

RSpec.feature "Projects", type: :feature do
  background do
    visit '/'
    login_user(user)
    create_pair(:project, user: user)
  end

  given(:user) { create(:user) }

  scenario 'Add project', :js do
    click_on 'Add TODO list'
    within('form') do
      fill_in 'title', with: FFaker::Lorem.sentence
    end
    click_on 'Add project'
    expect(page).to have_content('added')
  end

  scenario 'Delete project', :js do
    first('.project').find('.delete').click
    expect(page).to have_content('deleted')
  end

  scenario 'Edit project', :js do
    first('.project').find('.edit').click
    within 'form[name="edit_project_form"]' do
      fill_in 'title', with: FFaker::Lorem.sentence
    end
    expect(page).to have_content('updated')
  end

end