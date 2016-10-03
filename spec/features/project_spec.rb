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
      fill_in 'password', with: 1234
      fill_in 'password_confirmation', with: 1234
    end
    click_on 'Register'
    expect(page).to have_content 'Sign out'
  end

end