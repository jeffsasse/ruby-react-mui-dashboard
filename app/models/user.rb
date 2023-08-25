class User < ApplicationRecord
    include Filterable
    
    enum :user_type, { user: 2, admin: 1 }, default: :admin
    enum :status, { pending: 0, active: 1, archived: 2 }, default: :active


    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, presence: true, uniqueness: true
    validates :password,
                length: { minimum: 6 },
                if: -> { new_record? || !password.nil? }

    
    def active_account
        self.reset_password_token = generate_token
        self.reset_password_sent_at = Time.now.utc
        save!
        # UserMailer.sign_up(self).deliver_now
    end

    def generate_password_token!
        self.reset_password_token = generate_token
        self.reset_password_sent_at = Time.now.utc
        save!
        # ForgotPasswordMailer.forgot_password(self).deliver_now
    end
        
    def password_token_valid?
        (self.reset_password_sent_at + 4.hours) > Time.now.utc
    end
        
    def reset_password!(password)
        self.reset_password_token = nil
        self.password = password
        save!
        self.post_message_channel
        # UserMailer.reset_password(self).deliver_now

    end

    private
    
    def generate_token
        SecureRandom.hex(10)
    end
end
