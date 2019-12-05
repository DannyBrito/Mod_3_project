class User < ApplicationRecord
    has_many :user_clothing_items
    has_many :clothing_items, through: :user_clothing_items

    def clothing_items_array
        list =[]
        self.user_clothing_items.each do |item_connection|
            i_hash = item_connection.clothing_item.attributes
            i_hash[:personal_nickname] = item_connection.personal_nickname
            i_hash[:user_item_connection] = item_connection.id
            list << i_hash
         end
         list
         
    end

end
