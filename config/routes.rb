Rails.application.routes.draw do
  root to: 'static_pages#root'
  # use get when creating custom resources
  get :register, to: 'static_pages#register'

  # TODO: check that this is ok
  resources :users, defaults: {format: :json}, only: [:index, :show]

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :relationships, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :destroy, :show] do
      resources :comments, only: [:create, :destroy]
      resources :likes, only: [:create, :destroy]
    end
  end
end
