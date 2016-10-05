Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'application#todo_home'
  resources :projects do
    resources :tasks do
      resources :comments, only: [:create, :destroy]
    end
    put '/tasks/:id/prioritise', to: 'tasks#prioritise'
  end
end
