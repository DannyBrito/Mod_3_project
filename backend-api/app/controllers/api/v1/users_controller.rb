class Api::V1::UsersController < ApplicationController
    def index
        users = User.all

         render json: users, only: [:id, :username]
    end

    def show
        user = User.find_by(id: params[:id])
        list = user.clothing_items_array
        user = user.attributes
        user[:clothing_items] = list
        render json: user
    end

end
