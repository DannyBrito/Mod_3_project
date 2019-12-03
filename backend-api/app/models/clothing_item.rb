class ClothingItem < ApplicationRecord
    has_many :user_clothing_items
    has_many :users, through: :user_clothing_items
end
