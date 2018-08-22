Rails.application.routes.draw do
  
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    # auth
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:index, :create]
  end  

  get 'api/register_token' => 'api/users#register_token', as: 'api_register_token', defaults: { format: :json }

end
