class GamesController < ApplicationController
  def index
    @sentences = Sentence.all.shuffle
    gon.sentences = @sentences

    if user_signed_in?
      @sentences_myself = Sentence.where(user_id: current_user.id).shuffle
      gon.sentences_myself = @sentences_myself
    end

    @result = Result.new
  end
end
