class FakerController < ApplicationController
  def corporate
    @saying = Faker::Company.catch_phrase
  end

  def hacker
    @saying = Faker::Hacker.say_something_smart
  end
end
