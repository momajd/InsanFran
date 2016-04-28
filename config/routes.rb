Rails.application.routes.draw do
  root to: 'static_pages#root'
  # use get when creating custom resources
  get :register, to: 'static_pages#register'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :create, :destroy, :show]
  end
end
