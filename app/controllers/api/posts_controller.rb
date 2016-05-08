class Api::PostsController < ApplicationController

  def index
    # activerecord magic
    following_ids = current_user.following_ids

    #limit to 3 posts at a time and order descending so new posts are first
    @posts = Post.where("user_id IN (?) OR user_id = ?",
            following_ids, current_user.id).limit(count * 3).order('id desc')
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      render :show
    else
      @errors = @post.errors.full_messages
      render "api/shared/error", status: 422
    end

  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy

  end

  private
  def post_params
    params.require(:post).permit(:image_url)
  end

  def count
    # for the first render, use a count of 1
    params[:count] ? params[:count].to_i : 1
  end
end
