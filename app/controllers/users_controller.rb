class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.profile_image_url = params[:user][:profile_image_url]
    @user.save
    render :show
  end
end
