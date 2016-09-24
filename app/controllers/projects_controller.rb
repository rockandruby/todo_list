class ProjectsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.projects
  end

  def create
    render json: current_user.projects.create!(title: params[:title])
  end
end
