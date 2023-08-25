class ApplicationController < ActionController::Base
    def not_found
        render json: { error: 'not_found', message: 'not_found', status: false }
    end

    def authorize_request
        header = request.headers['Authorization']
        header = header.split(' ').last if header
        begin
            @decoded = JsonWebToken.decode(header)
            # @current_user = User.find(@decoded[:uid])
        rescue ActiveRecord::RecordNotFound => e
            render json: { errors: e.message, message: 'Not find user', status: false }, status: :unauthorized
        rescue JWT::DecodeError => e
            render json: { errors: e.message, message: 'token expired', status: false }, status: :unauthorized
        end
    end
end
