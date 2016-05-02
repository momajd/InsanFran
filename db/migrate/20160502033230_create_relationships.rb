class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.integer :follower_id, null: false
      t.integer :followed_id, null: false

      t.timestamps null: false
    end

    add_index :relationships, [:follower_id, :followed_id], unique: true
    add_index :relationships, :follower_id
    add_index :relationships, :followed_id
  end
end
