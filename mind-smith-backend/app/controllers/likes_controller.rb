class LikesController < ApplicationController
    before_action :find_like, only: [:show, :edit, :update, :destroy]

    def index
        @likes = Like.all 
        render json: @likes
    end

    def show
        render json: @likes
    end

    def new
    end

    def create
        @like = Like.create(like_params)
        render json: @like
    end

    def edit
    end

    def destroy
        @like.destroy
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end

    def find_like
        @like = Like.find(params[:id])
    end
end
