Rails.application.routes.draw do
  resources :interactive_modules
  root 'interactive_modules#index'
end
