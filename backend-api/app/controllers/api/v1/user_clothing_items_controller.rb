class Api::V1::UserClothingItemsController < ApplicationController
    def show
        join = UserClothingItem.find_by(id: params[:id])
        render json: join, status: 200
    end

    def destroy
        join = UserClothingItem.find_by(id: params[:id])
        join.destroy
        render json: {message: "user item connetion succesfully deleted"}, status: 200
    end

    def create
        #error to handle -> do not permit create instance if no nickname
        if(params[:exiting_Item])
            UserClothingItem.create(user_id: params[:user_id],personal_nickname: params[:personal_nickname],clothing_item_id: params[:clothing_item_id])
        else # for new Item
        new_clothing_item = ClothingItem.create(brand: params[:brand],clothing_type: params[:clothing_type],color: params[:color],temp_min: params[:temp_min], temp_max: params[:temp_max])
        UserClothingItem.create(user_id: params[:user_id],personal_nickname: params[:personal_nickname],clothing_item: new_clothing_item)
        end
        render json: {message: "user item connetion succesfully created"}, status: 200
    end

    private

    def create_params
        params.require(:user_clothing_item).permit(:user_id,:clothing_item_id)
    end
end
