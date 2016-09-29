class TasksController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource :project
  load_and_authorize_resource :task, through: :project

  def create
    render json: @project.tasks.create(task_params)
  end

  def update
    @task.update(task_params)
  end

  def destroy
    @task.destroy
  end

  def prioritise
    params[:direction] == 'up' ? @task.move_higher : @task.move_lower
    render json: @project
  end

  private

  def task_params
    params.require(:task).permit(:title, :is_done)
  end
end
