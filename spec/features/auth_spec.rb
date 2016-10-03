require 'rails_helper'

RSpec.feature "Auth", type: :feature do
  background do
    visit '/'
  end

  scenario 'Sign up user', :js do
    reg_user
    expect(page).to have_content 'Sign out'
  end

  scenario 'Sign in user', :js do
    user = create(:user)
    click_on 'Sign in'
    within('form') do
      fill_in 'email', with: user.email
      fill_in 'password', with: user.password
    end
    click_on 'log_in'
    expect(page).to have_content 'Sign out'
  end

  scenario 'Facebook auth', :js do
    click_on 'Sign in'
    click_on 'Sign in with Facebook'
    expect(page).to have_content 'Sign out'
  end

  scenario 'Sign out user', :js do
    reg_user
    click_on 'Sign out'
    expect(page).to have_content 'Sign in'
  end

end