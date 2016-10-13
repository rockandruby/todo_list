class CommentsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource :task
  load_and_authorize_resource :comment, through: :task

  def destroy
    @comment.destroy
  end

  def create
    @comment.file = params[:comment][:file]
    @comment.update!(comment_params)
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:title, :file)
  end
end
