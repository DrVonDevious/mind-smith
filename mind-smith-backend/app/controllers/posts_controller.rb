class PostsController < ApplicationController
    before_action :find_post, only: [:show, :edit, :update, :destroy]

    def index
        @posts = Post.all 
        render json: @posts
    end

    def show
        @channel_post_list = @post.channel.posts.select{|post| post.id != @post.id}
        @tag_list = @post.tags
        @tag_post_list = @tag_list.map{|tag| tag.posts}.flatten.uniq().filter{|post| post != @post}

        render json: {post: {title: @post.title, body:@post.body, tags:@post.tags, author:@post.user.username, authorImage:@post.user.img_url, channel: @post.channel.name}, similarPosts:[{byChannel:@channel_post_list}, {byTag:@tag_post_list}]}
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
