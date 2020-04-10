class PostsController < ApplicationController
    before_action :find_post, only: [:show, :edit, :update, :destroy]

    def index
        @posts = Post.all 
        render json: @posts
    end

    def show
        render json: @post
    end

    def new
    end

    def create
        @post = Post.create(post_params)
        render json: @post
    end

    def edit
    end

    def update

    end

    def destroy
        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(user_id, channel_id, post_tags)
    end

    def find_post
        @post = Post.find(params[:id])
    end
end
