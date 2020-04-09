Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :channel , :subscription 

  resource :users
  resource :messages

end
