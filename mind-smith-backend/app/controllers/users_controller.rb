class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = find_user(params[:id])
    render json: user
  end

  def edit
  end

  def update
    user = find_user(params[:id])
    user.update(strong_params)
  end

  def new
  end

  def create
    user = User.create(strong_params)
    render json: user
  end

  def delete
    user = User.find_by(id: params[:id])
    user.destroy()
  end

  private

  def find_user(id)
    return User.find_by(id: id)
  end

  def strong_params
    params.require(:user).permit(:username, :password_digest, :bio, :img_url)
  end

end
