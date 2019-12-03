class CreateClothingItems < ActiveRecord::Migration[6.0]
  def change
    create_table :clothing_items do |t|
      t.string :brand
      t.string :clothing_type
      t.string :color
      t.integer :temp_min
      t.integer :temp_max

      t.timestamps
    end
  end
end
