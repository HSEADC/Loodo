Rails.application.routes.draw do
  resources :lessons
  resources :interactive_modules
  root 'interactive_modules#index'
end
