# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!([
  {username: "guest", password: "password", name: "Guest"},
  {username: "momajd", password: "password", name: "Mo"}
])

posts = Post.create!([
  {image_url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Golden_Gate_Bridge_0002.jpg",
  user_id: 1},
  {image_url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/San_Francisco_-_Oakland_Bay_Bridge_At_Night.jpg",
  user_id: 2}
])

comments = Comment.create!([
  {user_id: 2, post_id: 1, body: "first comment oh yea"},
  {user_id: 2, post_id: 1, body: "second comment"}
  ])
