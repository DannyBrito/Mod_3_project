class Api::V1::ClothingItemsController < ApplicationController
    def index
        clothing_items = ClothingItem.all
        render json: clothing_items
    end

    def show
        clothing_item = ClothingItem.find_by(id: params[:id])
        render json: clothing_item
    end
end
