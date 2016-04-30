class Api::PostsController < ApplicationController

  def index
    # TODO: will need to filter posts; just display all for now
    @posts = Post.all
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
end
