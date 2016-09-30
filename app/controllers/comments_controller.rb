class CommentsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource :task
  load_and_authorize_resource :comment, through: :task
end
