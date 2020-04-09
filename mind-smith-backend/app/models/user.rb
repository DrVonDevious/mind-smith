class User < ApplicationRecord
  has_many :messages
  has_many :posts
  has_many :subscriptions
  has_many :channels, through: :subscriptions
end
