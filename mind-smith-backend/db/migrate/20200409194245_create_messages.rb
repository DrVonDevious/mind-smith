class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.integer :sender
      t.integer :recipient
      t.string :content

      t.timestamps
    end
  end
end
