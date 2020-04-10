class ChannelsController < ApplicationController
    before_action :find_channel, only: [:show, :edit, :update, :destroy]

    def index
        @channels = Channel.all 
        render json: @channels
    end

    def show
        render json: @channel
    end

    def new

    end

    def create
        @channel = Action.create(channel_params)
        render json: @channel
    end

    def edit

    end

   

    def destroy
        @channel.destroy
    end

    private

    def channel_params
        params.require(:channel).permit(:name)
    end

    def find_channel
        @channel = Channel.find(params[:id])
    end
end
