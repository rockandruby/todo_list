def sign_in_user
  @request.env['devise.mapping'] = Devise.mappings[:user]
  sign_in user
  @request.headers.merge!(user.create_new_auth_token)
end

def json
  JSON.parse(response.body)
end

def set_ability
  @ability = Object.new
  @ability.extend(CanCan::Ability)
  @controller.stub(:current_ability).and_return(@ability)
end

def project_ability
  @ability.can :manage, Project, user_id: user.id
end

def task_ability
  project_ability
  @ability.can :manage, Task, project: { user_id: user.id }
end

def comment_ability
  project_ability
  task_ability
  @ability.can :manage, Comment, task: { project: { user_id: user.id } }
end

def reg_user
  click_on 'Sign up'
  within('form') do
    fill_in 'name', with: FFaker::Name.name
    fill_in 'email', with: FFaker::Internet.email
    fill_in 'password', with: 1234
    fill_in 'password_confirmation', with: 1234
  end
  click_on 'Register'
end

def login_user(user)
  click_on 'Sign in'
  within('form') do
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
  end
  click_on 'log_in'
end

def manage_instruments
  find(:css, '.project .task .edit_instruments', match: :first).click
end
