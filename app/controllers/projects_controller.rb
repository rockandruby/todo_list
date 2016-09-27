class ProjectsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource only: [:destroy, :update]

  def index
    render json: current_user.projects
  end

  def create
    render json: current_user.projects.create!(title: params[:title])
  end

  def update
    @project.update(title: params[:title])
    render json: @project
  end

  def destroy
    render json: @project.destroy
  end
end
