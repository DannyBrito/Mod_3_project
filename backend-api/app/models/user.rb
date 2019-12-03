class User < ApplicationRecord
    has_many :user_clothing_items
    has_many :clothing_items, through: :user_clothing_items
end
