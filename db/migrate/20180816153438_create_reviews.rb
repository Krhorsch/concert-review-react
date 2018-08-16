class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :artist
      t.string :venue
      t.string :date
      t.text :content

      t.timestamps
    end
  end
end
