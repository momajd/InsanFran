# InsanFran

## [Live Link][heroku]

[heroku]: http://insanfran.herokuapp.com

InsanFran is a full-stack web application that provides a platform for sharing San Francisco photography. It was inspired by Instagram.

The backend was created with Ruby on Rails using a PostgreSQL database; the frontend utilizes React.js and Flux architecture. All styling was done using CSS/SCSS.

## Features

### Log in & Log out / Frontend Auth

On the backend in rails, the BCrypt library is used to hash passwords (only hashed passwords are stored in the database).  A session token is created for the user each time they log in so that they can be remembered as the current user.

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
