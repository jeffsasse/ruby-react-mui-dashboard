class Api::UsersController < ApplicationController
    before_action :authorize_request

    def index
        order_by = params[:order_by].present? ? params[:order_by] : 'id'
        order_priority = params[:order].present? ? params[:order] : 'DESC'
        order = "#{order_by} #{order_priority}"
        page = params[:page].present? ? params[:page] : 1
        per_page = params[:per_page].present? ? params[:per_page] : 10
        users = User.where(user_type: 2).filter_collection(filter_params).order(order)

        if per_page.to_i > 0
            @users = users.paginate(page: page, per_page: per_page)
        else
            @users = users
        end

        paginate = { total_count: users.count, page: page, per_page: per_page}
        render json: { data: { users: @users, paginate: paginate, }, status: true }, status: :ok
    end

    private

    def filter_params
        params.slice(:username, :first_name, :last_name, :email, :phone_number, :created_at).delocalize(created_at: :date)
    end
end
