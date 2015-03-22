class StaticController < ApplicationController
  def index
    @saying = Faker::Company.catch_phrase
  end
end
