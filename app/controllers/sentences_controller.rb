class SentencesController < ApplicationController
  before_action :get_sentence, only: [:edit, :update, :destroy]

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

  def edit
  end

  def update
    if @sentence.update(set_sentence)
      redirect_to sentences_path
    end
  end

  def destroy
    if @sentence.destroy
      redirect_to sentences_path
    end
  end

  private
  def set_sentence
    params.require(:sentence).permit(:text, :romaji)
  end
  
  def get_sentence
    @sentence = Sentence.find(params[:id])
  end
end
