require 'rails_helper'

RSpec.feature "Tasks", type: :feature do
  background do
    visit '/'
    login_user(user)
    create_pair(:project, user: user)
  end

  given(:user) { create(:user) }

  scenario 'Add task', :js do
    within first('.project') do
      within 'form[name="edit_project_form"]' do
        fill_in 'title', with: FFaker::Lorem.sentence
      end
      click_on 'Add task'
      expect(page).to have_content('added')
    end
  end

  scenario 'Mark as done', :js do
    within first('.project') do
      first('.task').find('md-checkbox').set(true)
    end
    expect(page).to have_content('updated')
  end
end
