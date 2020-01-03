class GamesController < ApplicationController
  def index
    @sentences = Sentence.all.shuffle
    gon.sentences = @sentences
    @result = Result.new
  end
end
