Rails.application.routes.draw do
  root to: 'static_pages#root'
  # use get when creating custom resources
  get :register, to: 'static_pages#register'

  resources :users, defaults: {format: :json}, only: [:index, :show, :update]

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :relationships, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :destroy, :show] do
      resources :comments, only: [:create, :destroy]
      # TODO: redraw likes
      resources :likes, only: [:create, :destroy]
    end
  end
end
