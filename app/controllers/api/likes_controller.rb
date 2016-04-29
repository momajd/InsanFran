class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    #make sure like belongs to current user
    @like.user = current_user

    if @like.save
      render :show
    else
      @errors = @like.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])

    if @like.destroy
      render :show
    else
      @errors = favorite.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:post_id, :user_id)
  end
end
