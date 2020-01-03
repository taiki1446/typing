class ResultsController < ApplicationController
  def index
    @results = Result.all.order("average desc")
  end

  def create
    @result = Result.new(set_result)
    if @result.save
      redirect_to results_path
    end
  end

  private
  def set_result
    params.require(:result).permit(:stc_num, :string_num, :average, :user_id)
  end
end
