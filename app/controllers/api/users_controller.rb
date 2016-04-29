class Api::UsersController < ApplicationController

  def create
    #make sure we define an empty user if no params or passed, otherwise
    #@user.save won't create any errors
    @user = params[:user] ? User.new(user_params) : User.new

    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
