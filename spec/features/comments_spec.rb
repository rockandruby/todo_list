require 'rails_helper'

RSpec.feature "Comments", type: :feature do
  background do
    visit '/'
    login_user(user)
    project = create(:project, user: user)
    create_list(:comment, 5, task: project.tasks.take)
  end

  given(:user) { create(:user) }

  scenario 'Add comment', :js do
    manage_instruments
    find(:css, '.md-open-menu-container .add_comment', match: :first).click
    within '#comment_form' do
      fill_in 'comment_body', with: FFaker::Lorem.sentence
      find('#exampleInputFile', visible: false).set(Rails.root + '/spec/support/test_file.txt')
    end
    expect { click_on 'Add comment' }.to change { wait_for_ajax { find_all('.md-3-line').count } }.by(1)
  end

  scenario 'Delete comment' do
    manage_instruments
    find(:css, '.md-open-menu-container .add_comment', match: :first).click
    expect do
      find(:css, '.delete_comment', match: :first).click
    end.to change { wait_for_ajax { find_all('.md-3-line').length } }.by(-1)
  end
end
