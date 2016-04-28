class Api::CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save!
      render :show
    else
      # TODO: Verify this is correct
      render json: @post.errors.full_messages, status 422
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :post_id, :user_id);
  end
end
