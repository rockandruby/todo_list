class ProjectsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource only: [:destroy, :update]

  def index
    render json: current_user.projects
  end

  def create
    render json: current_user.projects.create(project_params)
  end

  def update
    @project.update(title: params[:title])
  end

  def destroy
    @project.destroy
    render json: current_user.projects
  end

  private

  def project_params
    params.require(:project).permit(:title)
  end
end
