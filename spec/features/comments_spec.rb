require 'rails_helper'

RSpec.feature "Comments", type: :feature do
  background do
    visit '/'
    login_user(user)
    create(:project, user: user)
  end

  given(:user) { create(:user) }

  scenario 'Add comment', :js do
    manage_instruments
    find(:css, '.md-open-menu-container .add_comment', match: :first).click
    within '#comment_form' do
      fill_in 'comment_body', with: FFaker::Lorem.sentence
      find('#exampleInputFile', visible: false).set(Rails.root + '/spec/support/test_file.txt')
    end
    expect { click_on 'Add comment' }.to change{sleep 1; find_all('.md-3-line').count}.by(1)
  end

  # scenario 'Delete comment' do
  #   within ('.project') do
  #     within find(:css, '.task', match: :first) do
  #       find('md-ink-ripple').click
  #       find('add_comment').click
  #       within '#comments_modal' do
  #         expect do
  #           find(:css, '.md-3-line', match: :first).find('delete_comment').click
  #         end.change(find('.md-3-line').length).by(-1)
  #       end
  #     end
  #   end
  # end
end
