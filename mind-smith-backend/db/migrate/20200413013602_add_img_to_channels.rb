class AddImgToChannels < ActiveRecord::Migration[6.0]
  def change
    add_column :channels, :img, :string
  end
end
