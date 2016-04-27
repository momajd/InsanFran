class Api::PostsController < ApplicationController

  def index
    # TODO: will need to filter posts; just display all for now
    @posts = Post.all
  end

  def show
    
  end

  def destroy

  end
end
