class FakerController < ApplicationController
  def corporate
    saying = Faker::Company.catch_phrase
    render :json => {:saying => saying}
  end

  def hacker
    saying = Faker::Hacker.say_something_smart
    render :json => {:saying => saying}
  end
end
