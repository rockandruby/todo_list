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
      within first('.task') do
        find('md-checkbox').set(true)
      end
    end
    expect(page).to have_content('updated')
  end

  scenario 'Edit task', :js do
    within first('.project') do
      within first('.task') do
        find('md-ink-ripple').click
        find('.edit_task').click
        within '#task_edit_form' do
          fill_in 'task_body', with: FFaker::Lorem.sentence
          click_on 'Update task'
        end
        expect(page).to have_content('updated')
      end
    end
  end

  scenario 'Delete task', :js do
    within first('.project') do
      within first('.task') do
        find('md-ink-ripple').click
        find('.delete_task').click
      end
      expect(page).to have_content('deleted')
    end
  end

  scenario 'Choose deadline', :js do
    within first('.project') do
      within first('.task') do
        find('.md-datepicker-button').click
        find('.md-calendar-date').click
      end
      expect(page).to have_content('updated')
    end
  end
end
