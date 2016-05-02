class Api::RelationshipsController < ApplicationController

  def create
    @relationship = Relationship.new(relationship_params)
    render :show if @relationship.save
  end

  def destroy
    @relationship = Relationship.find_by(
      follower_id: relationship_params[:follower_id],
      followed_id: relationship_params[:followed_id]
    )
    render :show if @relationship.destroy
  end

  private
  def relationship_params
    params.require(:relationship).permit(:follower_id, :followed_id)
  end
end
