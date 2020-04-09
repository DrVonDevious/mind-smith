class Message < ApplicationRecord
  belongs_to :user, class_name: "User", foreign_key: :user_id
  belongs_to :recipient_user, class_name: "User", foreign_key: :recipient_user_id
end
