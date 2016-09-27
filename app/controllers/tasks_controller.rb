class TasksController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource :project
  load_and_authorize_resource :task, through: :project

  def create
    render json: @project.tasks.create(task_params)
  end

  private

  def task_params
    params.require(:task).permit(:title)
  end
end
