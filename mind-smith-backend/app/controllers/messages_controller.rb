class MessagesController < ApplicationController
  before_action :find_message, only: [:show, :edit, :update, :destroy]

  def index
      @messages = Message.all
      render json: @messages
  end

  def show
      render json: @message
  end

  def new
  end

  def create
      @message = Message.create(message_params)
      render json: @message
  end

  def edit
  end

  def destroy
      @message.destroy
  end

  private

  def message_params
      params.require(:message).permit(:user_id, :recipient_user_id)
  end

  def find_message
      @message = Message.find(params[:id])
  end

end
