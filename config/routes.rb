Rails.application.routes.draw do
  get 'commits/index'
  devise_for :users
  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
