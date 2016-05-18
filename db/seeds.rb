# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cloudinary_url = "http://res.cloudinary.com/dfqqsmub8/image/upload/w_250,h_250,c_thumb,g_face/"

guest = User.create!([
  {username: "guest", password: "password", name: "Awesome Guest"},
  {username: "mo_majd", password: "password", name: "Mo Majd", profile_image_url: "#{cloudinary_url + "v1462496049/mrhGtJb3VZCdwP1b_UezVg_oog2mv.jpg"}" },
  {username: "d_tanner", password: "password", name: "Danny Tanner", profile_image_url: "#{cloudinary_url + "v1462302079/futkleaw2eftnkasj27l.jpg"}" },
  {username: "g_newsom", password: "password", name: "Gavin Newsom", profile_image_url: "#{cloudinary_url + "gavin-newsom300x200_a0m1mf.jpg"}" },
  {username: "oprah", password: "password", name: "Oprah Winfrey", profile_image_url: "#{cloudinary_url + "oprah_winfrey_horizontal_a_l_gsv3z8.jpg"}" },
  {username: "terminator", password: "password", name: "Arnold Schwarzenegger", profile_image_url: "http://goo.gl/aO1eGe"},
  {username: "dannyglover", password: "password", name: "Danny Glover", profile_image_url: "https://goo.gl/p2zWqs"},
  {username: "tom_hanks", password: "password", name: "Tom Hanks", profile_image_url: "https://goo.gl/reaXjM"},
  {username: "jgarcia", password: "password", name: "Jerry Garcia", profile_image_url: "#{cloudinary_url + "v1462500344/jerry-garcia_o9xhcf.jpg"}" },
  {username: "CSantana", password: "password", name: "Carlos Santana", profile_image_url: "#{cloudinary_url + "v1462500521/carlos-santana-02_exyiid.jpg"}" },
  {username: "Twain", password: "password", name: "Mark Twain", profile_image_url: "#{cloudinary_url + "v1462500665/marktwain_cc_img_0_ydsblc.jpg"}" },
  {username: "lucas_george", password: "password", name: "George Lucas", profile_image_url: "#{cloudinary_url + "v1462500793/latest_whl3aj.jpg"}" }
])

def rand_id
  rand(1..12)
end

posts = Post.create!([
  {image_url: "https://images.unsplash.com/photo-1414005987108-a6d06de8769f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=75231aea5223b76d20bd8a7e0777de4d",
  user_id: 1},
  {image_url: "https://images.unsplash.com/photo-1420788947422-10084e322683?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=06805f454b3785599c6bcb5fc58f0ed0",
  user_id: 10},
  {image_url: "https://images.unsplash.com/14/unsplash_5244808e6b835_1.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=12826d4d6562304e24d499cfec356281",
  user_id: 9},
  {image_url: "https://images.unsplash.com/photo-1450149632596-3ef25a62011a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5d5892d567b71e916212fa0f5c7a4420",
  user_id: 8},
  {image_url: "https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f6afff6e20e207bbe89356e92770c86a",
  user_id: 7},
  {image_url: "https://images.unsplash.com/photo-1445359179985-460648949e10?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0f6daeaab32d08d43c0d621bb23a8b77",
  user_id: 6},
  {image_url: "https://images.unsplash.com/photo-1431817986760-7cc7fbb937b2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ece0888289bcb100cc2248b3a3de5899",
  user_id: 5},
  {image_url: "https://images.unsplash.com/photo-1445264157214-a120770384d3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=aaabd479c46403d370f74d4857055439",
  user_id: 4},
  {image_url: "https://images.unsplash.com/photo-1422226256160-9b266e308ea6?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 3},
  {image_url: "https://images.unsplash.com/photo-1429479196389-7d1afeaa2d21?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=928555934369eaa7769d90f568f45828",
  user_id: 1},
  {image_url: "http://phlearn.com/wp-content/uploads/2012/08/cinemagraph.gif",
  user_id: 2},
  {image_url: "https://images.unsplash.com/photo-1461440728156-f48806552a74?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 11},
  {image_url: "https://images.unsplash.com/photo-1461530927168-44328109da52?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 12},
  {image_url: "https://images.unsplash.com/reserve/D8ijGd3CSGq4BxJ9EzTf_13976945916_fa0ce84ee3_o.jpg?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 8},
  {image_url: "https://images.unsplash.com/reserve/fawrXCzwSsOUMmJr9GGD_alcatraz.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0094343d5e3ecef29ce0bbba71c2ffd1",
  user_id: 9},
  {image_url: "https://images.unsplash.com/photo-1416466990059-6d32e4a39f10?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 10},
  {image_url: "https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=36d7f4a57b95c194adaecac96d4fc395",
  user_id: 4},
  {image_url: "https://images.unsplash.com/photo-1414265247351-4afd13a3b4e6?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 5},
  {image_url: "https://images.unsplash.com/photo-1428341751458-3c844056bc0f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=7db4bf008c669e4e91fcf2ea54ab1c50",
  user_id: 6},
  {image_url: "https://images.unsplash.com/photo-1428341944206-459111332729?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 1},
  {image_url: "https://images.unsplash.com/photo-1428434828181-9d110c490087?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 2},
  {image_url: "https://images.unsplash.com/photo-1444212568492-d2799d30943b?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 3},
  {image_url: "https://images.unsplash.com/photo-1432250681869-3784e3d5a99f?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 1},
  {image_url: "https://images.unsplash.com/photo-1423347834838-5162bb452ca7?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 2},
  {image_url: "https://images.unsplash.com/photo-1439396087961-98bc12c21176?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ee3dc8500eb069d89c21706148c6c4b4",
  user_id: 3},
  {image_url: "https://images.unsplash.com/photo-1419407118704-43ccfda4036d?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 4},
  {image_url: "https://images.unsplash.com/photo-1428279256096-aa1eb8c02c48?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=59371ac6d0ffa38f511b652499a839e6",
  user_id: 5},
  {image_url: "https://images.unsplash.com/photo-1457726942612-1b660c2740b2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=4d1a935de23cb8e8eef52ac04c51f242",
  user_id: 6},
  {image_url: "https://images.unsplash.com/photo-1428341944206-459111332729?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 7},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/t/55a84271e4b018a0dbe1c0af/1437090431690/?format=1000w",
  user_id: 8},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc2e1/52200493e4b053b3578feb6c/1377830140735/Inside+the+Ferry+Building.jpg?format=1000w",
  user_id: 9},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc2e1/52200493e4b053b3578feb6d/1377830136081/Bay+Bridge+blue+hour+pilings+HDR+-+Version+2.jpg?format=1000w",
  user_id: 10},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc2e1/52200493e4b053b3578feb6f/1377830143021/A+corner+in+Chinatown.jpg?format=1000w",
  user_id: 11},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc2e1/52200493e4b053b3578feb72/1377830136562/Empty+wharf.jpg?format=1000w",
  user_id: 12},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc2e1/52200493e4b053b3578feb73/1377830134354/Grace+Cathedral+center+aisle+HDR+-+Version+2.jpg?format=1000w",
  user_id: 12},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc2e1/52200493e4b053b3578feb78/1377830136889/SF+Blue+Hour.jpg?format=1000w",
  user_id: 11},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/t/533f240ce4b023316213f85c/1396646925849/?format=1500w",
  user_id: 10},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/t/533f2451e4b0907609aef901/1396646996055/?format=1500w",
  user_id: 9},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/t/533f2883e4b0e0ebd522158c/1396648076191/?format=1500w",
  user_id: 8},
  {image_url: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/t/533f28c9e4b0fb7f7a013339/1396648168228/?format=1500w",
  user_id: 7},
  {image_url: "https://images.unsplash.com/photo-1414005987108-a6d06de8769f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=75231aea5223b76d20bd8a7e0777de4d",
  user_id: 6},
  {image_url: "https://images.unsplash.com/photo-1444053487655-7507bc7e38c1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=bfe5233cfe49960d685ca2ef099d80fd",
  user_id: 5},
  {image_url: "https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8f67d9ea1f1ef3c24104eccad00b3eba",
  user_id: 4},
  {image_url: "http://farm4.static.flickr.com/3025/5698564979_1686a328ef_o.gif",
  user_id: 1},
  {image_url: "https://images.unsplash.com/30/ny-filtered.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5f9501910fe9150ebca3d7cfd6c4921b",
  user_id: 1},
  {image_url: "https://images.unsplash.com/photo-1445264157214-a120770384d3?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
  user_id: 3},
  {image_url: "https://images.unsplash.com/14/unsplash_5244808e6b835_1.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=12826d4d6562304e24d499cfec356281",
  user_id: 2}
])

comments = Comment.create!([
  {user_id: rand_id, post_id: 44, body: "what a cool thing"},
  {user_id: rand_id, post_id: 44, body: "lorem ipsum"},
  {user_id: rand_id, post_id: 43, body: "woahhh very cool"},
  {user_id: rand_id, post_id: 43, body: "I've been there before"},
  {user_id: rand_id, post_id: 43, body: "Why wasn't I invited?"},
  {user_id: rand_id, post_id: 42, body: "hello world"},
  {user_id: rand_id, post_id: 42, body: "hey there"},
  {user_id: rand_id, post_id: 41, body: "beautiful"},
  {user_id: rand_id, post_id: 41, body: "lorem ipsum"},
  {user_id: rand_id, post_id: 41, body: "great picture"},
  {user_id: rand_id, post_id: 40, body: "Did you take that on a nikon?"},
  {user_id: rand_id, post_id: 40, body: "ok ok pretty cool pretty cool"},
  {user_id: rand_id, post_id: 40, body: "wooooot"},
  {user_id: rand_id, post_id: 39, body: "lorem ipsum"},
  {user_id: rand_id, post_id: 37, body: "lorem ipsum"},
  {user_id: rand_id, post_id: 36, body: "lorem ipsum"},
  {user_id: 7, post_id: 35, body: "I'm too old for this.."},
  {user_id: rand_id, post_id: 35, body: "Ha! Very funny"},
  {user_id: rand_id, post_id: 35, body: "I can't believe he said that"},
  {user_id: 8, post_id: 36, body: "Mo's app is fun :)"},
  {user_id: 6, post_id: 34, body: "I'll be back"},
  {user_id: 7, post_id: 34, body: "smh..."},
  {user_id: 3, post_id: 33, body: "Very clean!"},
  {user_id: rand_id, post_id: 33, body: "woaahhhhh"},
  {user_id: rand_id, post_id: 1, body: "woaahhhhh"},
  {user_id: rand_id, post_id: 1, body: "Great pic!"},
  {user_id: rand_id, post_id: 1, body: "Where was that?"},
  {user_id: rand_id, post_id: 10, body: "LOL"},
  {user_id: rand_id, post_id: 10, body: "What's so funny?"},
  {user_id: rand_id, post_id: 10, body: "great seed data"},
  {user_id: rand_id, post_id: 20, body: "Ahhh so nice"},
  {user_id: rand_id, post_id: 20, body: "Yes it is"},
  {user_id: rand_id, post_id: 20, body: "Sono venuto qui l'anno"},
  {user_id: rand_id, post_id: 23, body: "Hello Hello"},
  {user_id: rand_id, post_id: 23, body: "I don't know why you say Goodbye"},
  {user_id: rand_id, post_id: 23, body: "I say Hello"},
  {user_id: rand_id, post_id: 11, body: "Hmmm I don't know about that"},
  {user_id: rand_id, post_id: 11, body: "LOL OMG"},
  {user_id: rand_id, post_id: 20, body: "You may say I'm a dreamer.."},
  {user_id: rand_id, post_id: 20, body: "but I'm not the only one.."},
  {user_id: rand_id, post_id: 24, body: "Bernie 2016"},
  {user_id: rand_id, post_id: 24, body: "Really!?!?"},
  {user_id: rand_id, post_id: 45, body: "Dude, that is NYC"},
  {user_id: rand_id, post_id: 45, body: "Not cool!"},
  {user_id: rand_id, post_id: 45, body: "What's wrong with NY??"},
  ])

(1..User.all.length).each do |user_id|
  #say each user likes 20 posts
  post_ids = (1..Post.all.length).to_a
  20.times do
    post_id = post_ids.shuffle!.pop
    Like.create!({user_id: user_id, post_id: post_ids.shuffle!.pop})
  end
end

(1..User.all.length).each do |follower_id|
  #say each user follows between 7 and 10 people
  total_following = rand(7..10)

  users = (1..User.all.length).to_a - [follower_id]

  total_following.times do
    followed_id = users.shuffle!.pop
    Relationship.create({follower_id: follower_id, followed_id: followed_id})
  end
end
