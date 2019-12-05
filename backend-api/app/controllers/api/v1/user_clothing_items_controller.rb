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
        UserClothingItem.create(create_params)
        render json: {message: "user item connetion succesfully created"}, status: 200
    end

    private

    def create_params
        params.require(:user_clothing_item).permit(:user_id,:clothing_item_id)
    end
end
