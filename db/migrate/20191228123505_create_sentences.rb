class CreateSentences < ActiveRecord::Migration[5.2]
  def change
    create_table :sentences do |t|
      t.text :text, null: false
      t.text :romaji, null: false
      t.timestamps
    end
  end
end
