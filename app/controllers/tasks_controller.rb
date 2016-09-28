class TasksController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource :project
  load_and_authorize_resource :task, through: :project

  def create
    render json: @project.tasks.create(task_params)
  end

  def update
    @task.update(task_params)
    if params[:direction]
      params[:direction] == 'up' ? @task.move_higher : @task.move_lower
    end
    render json: @project
  end

  def destroy
    @task.destroy
    render json: @project.tasks
  end

  private

  def task_params
    params.require(:task).permit(:title)
  end
end
