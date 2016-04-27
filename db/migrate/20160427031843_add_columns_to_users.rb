class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_image_url, :string
    add_column :users, :name, :string
  end
end
