json.array! @post do |post|
  json.id post.id
  json.image_url post.image_url
  json.user_id post.user_id
  json.user_username post.user.username
  json.user_name post.user.name
end
