class Api::V1::UsersController < ApplicationController
    def index
        users = User.all

        # render json: users, only: [:id, :username]
        # render json: UserSerializer.new(users).to_serialized_json
    end

    def show
        user = User.find_by(id: params[:id])
        list = user.clothing_items_array
        user = user.attributes
        user[:clothing_items] = list
        render json: user






        # options = { include: [:clothing_items] }
        # render json: user, include: :clothing_items 
    end

end
