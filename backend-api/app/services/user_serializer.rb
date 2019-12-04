class UserSerializer

    def initialize(user_object)
        @user = user_object
    end

    def to_serialized_json
        options = {}
        options[:include] = {
            clothing_items: {
                only: [:brand]
            },
            user_clothing_items: {
                only: [:personal_nickname]
            }
        }
        options[:except] = [:created_at, :updated_at]
        
    end
end