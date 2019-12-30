class GamesController < ApplicationController
  def index
    @sentences = Sentence.all.shuffle
    gon.sentences = @sentences
  end
end
