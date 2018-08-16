class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews, status: 200
  end

  def show
    @review = Review.find(params[:id])
    render json: @review, status: 200
  end
end
