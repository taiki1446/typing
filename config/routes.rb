Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: "users/sessions",
  }
  root to: "games#index"
  
  resources :sentences

  resources :results, only: [:index, :create]
end
