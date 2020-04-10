class TagsController < ApplicationController
    before_action :find_tag, only: [:show, :destroy]

    def index
        @tags = Tag.all
        render json: @tags
    end

    def show
        render json: @tag
    end

    def new
    end

    def create
        @tag = Tag.create(tag_params)
        render json: @tag
    end

    def edit
    end

    def destroy
        @tag.destroy
    end

    private

    def tag_params
        params.require(:tag).permit(name)
    end

    def find_tag
        @tag = Tag.find(params[:id])
    end
end