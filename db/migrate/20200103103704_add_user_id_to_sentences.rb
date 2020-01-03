class AddUserIdToSentences < ActiveRecord::Migration[5.2]
  def change
    add_column :sentences, :user_id, :integer
  end
end
