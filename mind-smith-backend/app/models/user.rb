class User < ApplicationRecord
  has_many :messages

  has_many :messages_as_sender, class_name: "Message", foreign_key: "recipient_user_id"
  has_many :receivers, through: :messages_as_sender, source: :receiver

  has_many :messages_as_receiver, class_name: "Message", foreign_key: "user_id"
  has_many :senders, through: :messages_as_receiver, source: :sender

  has_many :posts
  has_many :subscriptions
  has_many :channels, through: :subscriptions
end
