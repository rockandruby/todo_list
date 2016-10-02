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
  can :manage, Comment, task: { project: { user_id: user.id } }
end
