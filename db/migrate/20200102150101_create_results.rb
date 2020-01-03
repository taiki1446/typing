class CreateResults < ActiveRecord::Migration[5.2]
  def change
    create_table :results do |t|
      t.integer :stc_num, null: false
      t.integer :string_num, null: false
      t.float :average, null: false
      t.integer :user_id
      t.timestamps
    end

    add_index :results, :average
  end
end
