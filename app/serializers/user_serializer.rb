class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :photo_url, :status, :first_name, :last_name, :phone_number, :middle_name, :address, :city, :state, :country, :postal_code, :user_type, :discarded_at, :created_at, :updated_at
end
