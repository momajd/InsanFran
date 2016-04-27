class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :image_url, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :posts, :user_id
  end
end
