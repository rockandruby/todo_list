require 'rails_helper'

RSpec.feature "Comments", type: :feature do
  background do
    visit '/'
    login_user(user)
    create(:project, user: user)
  end

  given(:user) { create(:user) }

  scenario 'Add comment', :js do

    # within ('.project') do
    #   within find(:css, '.task', match: :first) do
    #     find('md-ink-ripple').click
    #     find('add_comment').click
    #     within '#comments_modal' do
    #       fill_in 'comment_body', with: FFaker::Lorem.sentence
    #       attach_file('file', Rails.root + '/spec/support/test_file.txt')
    #     end
    #     expect { click_on 'Add comment' }.to change(find('.md-3-line').length).by(1)
    #   end
    # end
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
