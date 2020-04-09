class Channel < ApplicationRecord
    has_many :subscriptions 
    has_many :posts
    has_many :users , through: :subscriptions  
end
