Rails.application.routes.draw do
  devise_for :users

  namespace :admin do
    resources :interactive_modules

    resources :lessons do
      member do
        get 'publish'
      end

      resources :lesson_elements
    end

    root 'lessons#index'
  end

  resources :lessons, only: [:index, :show]
  resources :interactive_modules, only: :show

  root 'lessons#index'
end
