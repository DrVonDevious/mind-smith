class AddUserIdandChannelIdtoPosts < ActiveRecord::Migration[6.0]
  def change
    change_table :posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :channel, null: false, foreign_key: true
    end
  end
end
