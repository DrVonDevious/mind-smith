class AddChannelIdToSubscriptions < ActiveRecord::Migration[6.0]
  def change
    add_column :subscriptions, :channel_id, :integer
  end
end
