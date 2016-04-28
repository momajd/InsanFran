class StaticPagesController < ApplicationController
# if user is logged in, send to root; if logged out, send to register page
  def root
    if current_user
      render :root
    else
      redirect_to :register
    end
  end

  def register
    unless current_user
      render :register
    else
      redirect_to :root
    end
  end
end
