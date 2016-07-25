class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: :true}
  validate :password_presence, on: :create

  has_many :posts
  has_many :comments
  has_many :likes

  has_many :active_relationships, class_name: "Relationship",
                                  foreign_key: "follower_id",
                                  dependent: :destroy
  has_many :passive_relationships, class_name: "Relationship",
                                   foreign_key: "followed_id",
                                   dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
		@password = password
  end

  def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
		self.session_token ||= new_session_token
	end

  def new_session_token
		SecureRandom.base64
	end

  #This will be displayed instead of the password_digest error message
  def password_presence
    errors.add(:password, "can't be blank") unless self.password_digest
  end

  def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end
end
