class SubscriptionsController < ApplicationController
    before_action :find_subscription, only: [:show, :edit, :update, :destroy]

    def index
        @subscriptions = Subscription.all 
        render json: @subscriptions
    end

    def show
        render json: @subscription
    end

    def new

    end

    def create
        @subscription = Subscription.create(subscription_params)
        render json: @subscription
    end

    def edit

    end

   

    def destroy
        @subscription.destroy
    end

    private

    def subscription_params
        params.require(:subscription).permit(user_id , channel_id)
    end

    def find_subscription
        @subscription = Subscription.find(params[:id])
    end
end
