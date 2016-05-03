# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!([
  {username: "guest", password: "password", name: "Awesome Guest"},
  {username: "momajd", password: "password", name: "Mo Majd"}
])

posts = Post.create!([
  {image_url: "https://images.unsplash.com/photo-1414005987108-a6d06de8769f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=75231aea5223b76d20bd8a7e0777de4d",
  user_id: 1},
  {image_url: "https://images.unsplash.com/photo-1420788947422-10084e322683?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=06805f454b3785599c6bcb5fc58f0ed0",
  user_id: 1},
  {image_url: "https://images.unsplash.com/14/unsplash_5244808e6b835_1.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=12826d4d6562304e24d499cfec356281",
  user_id: 1},
  {image_url: "https://images.unsplash.com/photo-1450149632596-3ef25a62011a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5d5892d567b71e916212fa0f5c7a4420",
  user_id: 1},
  {image_url: "https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f6afff6e20e207bbe89356e92770c86a",
  user_id: 1},
  {image_url: "https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8f67d9ea1f1ef3c24104eccad00b3eba",
  user_id: 2},
  {image_url: "https://images.unsplash.com/photo-1445359179985-460648949e10?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0f6daeaab32d08d43c0d621bb23a8b77",
  user_id: 2},
  {image_url: "https://images.unsplash.com/photo-1431817986760-7cc7fbb937b2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ece0888289bcb100cc2248b3a3de5899",
  user_id: 2},
  {image_url: "https://images.unsplash.com/photo-1445264157214-a120770384d3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=aaabd479c46403d370f74d4857055439",
  user_id: 2}
])

comments = Comment.create!([
  {user_id: 2, post_id: 1, body: "first comment oh yea"},
  {user_id: 2, post_id: 1, body: "second comment"}
  ])
