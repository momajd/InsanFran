class Api::PostsController < ApplicationController

  def index
    # TODO: will need to filter posts; just display all for now
    # @posts = Post.all
    # use 3 posts for each count
    @posts = Post.limit(count * 3).order('id desc')
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
