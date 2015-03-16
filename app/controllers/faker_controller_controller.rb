class FakerControllerController < ApplicationController
  def corporate
    @saying = Faker::Corporate.slogan
  end

  def hacker
    @saying = Faker::Hacker.say_something_smart
  end
end
