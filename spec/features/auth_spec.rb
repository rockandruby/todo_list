require 'rails_helper'

feature 'sign_in/sign_up/oauth/sign_out'do
  background do
    visit '/'
  end

  scenario 'Sign up user', :js do
    click_on 'Sign up'
    within('form') do
      fill_in 'name', with: FFaker::NameMX.full_name
      fill_in 'email', with: FFaker::Internet.email
      fill_in 'pass', with: 1234
      fill_in 'pass_conf', with: 1234
    end
    click_on 'Register'
    expect(page).to have_content 'Sign out'
  end

  scenario 'Sign in user', :js do
    user = create(:user)
    click_on 'Sign in'
    within('form') do
      fill_in 'email', with: user.email
      fill_in 'pass', with: user.password
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
    click_on 'Sign in'
    click_on 'Sign in with Facebook'
    click_on 'Sign out'
    expect(page).to have_content 'Sign in'
  end

end