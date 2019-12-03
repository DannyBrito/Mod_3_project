class CreateUserClothingItems < ActiveRecord::Migration[6.0]
  def change
    create_table :user_clothing_items do |t|
      t.integer :user_id
      t.integer :clothing_item_id
      t.string :personal_nickname

      t.timestamps
    end
  end
end
