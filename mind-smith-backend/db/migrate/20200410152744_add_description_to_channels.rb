class AddDescriptionToChannels < ActiveRecord::Migration[6.0]
  def change
    add_column :channels, :description, :string
  end
end
