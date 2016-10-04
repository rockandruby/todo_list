require 'rails_helper'

RSpec.feature "Auth", type: :feature do
  background do
    visit '/'
  end

  let(:user) { create(:user) }

  # scenario 'Sign up user', :js do
  #   reg_user
  #   expect(page).to have_content 'Sign out'
  # end

  scenario 'Sign in user', :js do
    login_user(user)
    expect(page).to have_content 'Sign out'
  end
  #
  # scenario 'Facebook auth', :js do
  #   click_on 'Sign in'
  #   click_on 'Sign in with Facebook'
  #   expect(page).to have_content 'Sign out'
  # end
  #
  # scenario 'Sign out user', :js do
  #   reg_user
  #   click_on 'Sign out'
  #   expect(page).to have_content 'Sign in'
  # end

end