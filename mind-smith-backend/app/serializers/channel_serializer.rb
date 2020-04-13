class ChannelSerializer < ActiveModel::Serializer
  attributes :id , :name , :description , :img
  has_many :posts 
end
