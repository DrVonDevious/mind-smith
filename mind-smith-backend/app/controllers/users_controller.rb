class UsersController < ApplicationController

  def Index
    users = User.all
    render json: users
  end

  def Show
  end

  def Edit
  end

  def Update
  end

  def New
  end

  def Create
  end

  def Delete
  end

end
