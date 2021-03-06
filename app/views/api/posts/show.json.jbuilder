json.id @post.id
json.image_url @post.image_url
json.user_id @post.user_id
json.user @post.user

json.comments @post.comments do |comment|
  json.id comment.id
  json.user_id comment.user_id
  json.user comment.user.username
  json.body comment.body
end

json.likes @post.likes do |like|
  json.id like.id
  json.user_id like.user_id
  json.user like.user.username
  json.post_id  like.post_id
end
