def sign_in_user
  @request.env['devise.mapping'] = Devise.mappings[:user]
  sign_in user
  @request.headers.merge!(user.create_new_auth_token)
end

def json
  JSON.parse(response.body)
end
