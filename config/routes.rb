Rails.application.routes.draw do
  root 'pages#home'

  namespace :api, defaults: { format: :json } do
    # auth
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:create]
  end  
end
