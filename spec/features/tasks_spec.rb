require 'rails_helper'

RSpec.feature "Tasks", type: :feature do
  background do
    visit '/'
    login_user(user)
    project = create(:project, user: user)
    create_list(:task, 10, project: project)
  end

  given(:user) { create(:user) }

  scenario 'Add task', :js do
    within find(:css, '.project', match: :first) do
      fill_in 'add_task_title', with: FFaker::Lorem.sentence
      expect { click_ajax_button 'Add task' }.to change { find_all('.task').count }.by(1)
    end
  end

  scenario 'Mark as done', :js do
    find(:css, '.project .task md-checkbox', match: :first).click
    expect(page).to have_content('updated')
  end

  scenario 'Edit task', :js do
    manage_instruments
    find(:css, '.md-open-menu-container .edit_task', match: :first).click
    fill_in 'task_body', with: FFaker::Lorem.sentence
    click_on 'Update task'
    expect(page).to have_content('updated')
  end

  scenario 'Delete task', :js do
    manage_instruments
    expect do
      find(:css, '.md-open-menu-container .delete_task', match: :first).click
    end.to change { wait_for_ajax { find_all('.task').count } }.by(-1)
  end

  scenario 'Choose deadline', :js do
    find(:css, '.project .task .md-datepicker-button', match: :first).click
    find(:css, '.md-calendar-date span', match: :first).click
    expect(page).to have_content('updated')
  end

  scenario 'Change position', :js do
    find(:css, '.project .task .change_position', match: :first).click
    expect(page).to have_content('updated')
  end

end
