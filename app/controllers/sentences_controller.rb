class SentencesController < ApplicationController
  def index
    @sentences = Sentence.all
  end

  def new
    @sentences = Sentence.new
  end

  def create
    @sentence = Sentence.new(set_sentence)
    if @sentence.save
      redirect_to sentences_path
    end
  end

  def destroy
    if Sentence.find(params[:id]).destroy
      redirect_to sentences_path
    end
  end

  private
  def set_sentence
    params.require(:sentence).permit(:text, :romaji)
  end
end
