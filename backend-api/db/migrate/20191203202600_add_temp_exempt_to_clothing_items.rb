class AddTempExemptToClothingItems < ActiveRecord::Migration[6.0]
  def change
    add_column :clothing_items, :temp_exempt, :boolean, :default => false
  end
end
