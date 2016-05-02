class Api::RelationshipsController < ApplicationController

  def create
    debugger;
    @relationship = Relationship.new(relationship_params)
    render :show if @relationship.save
  end

  def destroy
    @relationship = Relationship
      .where("followed_id = ? AND follower_id = ?", params[:id], current_user.id)
      .first
    render :show if @relationship.destroy
  end

  private
  def relationship_params
    params.require(:relationship).permit(:follower_id, :followed_id)
  end
end
