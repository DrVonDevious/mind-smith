class PostsController < ApplicationController
    before_action :find_post, only: [:show, :edit, :update, :destroy]

    def index
        @posts = Post.all 
        render json: @posts
    end

    def show
        @post_list = @post.channel.posts.select{|post| post.id != @post.id}
        render json: {post: {title: @post.title, body:@post.body, created_at:@post.created_at, tags:@post.tags, author:@post.user.username, authorImage:@post.user.img_url, channel: @post.channel.name}, similarPosts:{byChannel:@post_list}}
    end

    def new
    end

    def create
        byebug
        @post = Post.create(post_params)
        if post_params[:tags]
            post_params.tags.each do |tag|
                if Tag.all.include?(tag)
                    PostTag.create(tag_id: tag.id, post_id: @post.id)
                else
                    new_tag = Tag.create(name: tag.name)
                    PostTag.create(tag_id: new_tag.id, post_id: @post.id)
                end
            end
        end
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
        params.require(:post).permit(:user_id, :channel_id, :tags, :title, :body)
    end

    def find_post
        @post = Post.find(params[:id])
    end
end
