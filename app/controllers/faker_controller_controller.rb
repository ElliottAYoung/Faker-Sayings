class FakerControllerController < ApplicationController
  def corporate
    @saying = Faker::Corporate.slogan
  end

  def hacker
  end
end
