require 'sidekiq/web'
require 'sidekiq/cron/web'

Sidekiq::Web.use ActionDispatch::Cookies
Sidekiq::Web.use ActionDispatch::Session::CookieStore, key: "_interslice_session"

Rails.application.routes.draw do    
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'homepage#index'

  mount Sidekiq::Web, at: '/sidekiq'

  namespace :api do
    post '/login', to: 'authentication#login'
    post '/password/forgot', to: 'authentication#forgot'
    post '/password/reset', to: 'authentication#reset'

    resources :users
  end

  get '*path', to: 'homepage#index'
end
