class Post < ActiveRecord::Base
  validates :image_url, :user_id, presence: true

  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
end
