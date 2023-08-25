class Api::AuthenticationController < ApplicationController
    # POST /login
    def login
        @user = User.find_by_email(params[:email])
        if @user&.authenticate(params[:password])
            token = JsonWebToken.encode(uid: @user.id)
            time = Time.now + 142.hours.to_i
            @user.password_digest = nil
            render json: { data: {
                token: token, 
                exp: time.strftime("%m-%d-%Y %H:%M"),
                type: 'bearer',
                user: @user,
                }, status: true }, status: :ok
        else
            render json: { error: 'unauthorized', message: 'Login failed. Please try again with correct credentials', status: false }, status: :ok
        end
    end

    def show
        render json: { data: { user: @current_user }, status: true }, status: :ok
    end

    def forgot
        if params[:email].blank? # check if email is present
            return render json: {error: 'Email not present', message: 'Email not preset', status: false}, status: :ok
        end
      
          user = User.find_by_email(params[:email]) # if present find user by email
      
          if user.present?
            user.generate_password_token! #generate pass token
            render json: {status: true, message: 'Email sent!'}, status: :ok
          else
            render json: {error: 'Email not found in service', message: 'Email not found in service', status: false}, status: :ok
          end
    end

    def reset
        token = params[:token].to_s

        user = User.find_by(reset_password_token: token)

        if user.present? && user.password_token_valid?
            if user.reset_password!(params[:password])
                render json: {status: true, message: 'Password reset'}, status: :ok
            else
                render json: {error: user.errors.full_messages, message: user.errors.full_messages, status: false}, status: :unprocessable_entity
            end
        else
            render json: {error:  'Link not valid or expired. Try generating a new link.', message: 'Link not valid or expired. Try generating a new link.', status: false}, status: :ok
        end
    end

    private

    def login_params
        params.permit(:email, :password)
    end
end
