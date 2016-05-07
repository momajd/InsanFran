# InsanFran

## [Live Link][heroku]

[heroku]: http://insanfran.us

InsanFran is a full-stack web application that provides a platform for sharing San Francisco photography. It was inspired by Instagram.

The backend was created with Ruby on Rails using a PostgreSQL database; the frontend utilizes React.js and Flux architecture. All styling was done using CSS/SCSS.

## Features

### Log in & Log out / Frontend Auth

On the backend in rails, the BCrypt library is used to hash passwords (only the `password_digest` for each user is stored in the database).  A `session_token` is created for the user each time they log in so that they can be remembered as the current user.

```Ruby
def password=(password)
  self.password_digest = BCrypt::Password.create(password)
  @password = password
end

def password_is?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end
```
On the frontend, flux cycles are set up to fetch the current user, login, logout, and create a new user.

![Login](/docs/images/login_page.png)

### Post creation

Users can create posts by uploading images. When a post is created through the UI, an action is set off and the post data is sent to the back-end with an ajax POST request. Associations in rails are set up for the post model to have many comments and likes.

Posts are made up of several layers of React Components and are displayed on the feed page. The design of these posts were modeled after the clean look of Instagram posts.

![Post](/docs/images/post.png)

### Relationship model for Followers

Following and Followed users are maintained using a relationship model. To effectively organize the asymmetric relationships in the database, relationships were split up into active and passive categories when setting up associations.

```Ruby
#user.rb

has_many :active_relationships, class_name: "Relationship",
                                foreign_key: "follower_id",
                                dependent: :destroy
has_many :passive_relationships, class_name: "Relationship",
                                 foreign_key: "followed_id",
                                 dependent: :destroy
has_many :following, through: :active_relationships, source: :followed
has_many :followers, through: :passive_relationships, source: :follower
```
On the frontend, the `FollowButton` component triggers a client action that either creates or destroys a relationship.

### User profile page

The user page displays user information and all of that users' posts. Each post on the user page has a `react-modal` component.

![Modal](/docs/images/modal.png)

## Gems and Libraries
- BCrypt
- Figaro
- FontAwesome
- React

## Future Features (listed by priority)
- Infinite Scroll
- Masonry
- Add videos
- Add tags
- Add descriptions to posts
