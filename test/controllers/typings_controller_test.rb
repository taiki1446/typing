require 'test_helper'

class TypingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get typings_index_url
    assert_response :success
  end

end
