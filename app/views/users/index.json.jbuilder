json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.profile_image_url user.profile_image_url

  json.followers user.followers do |follower|
    json.id follower.id
    json.username follower.username
  end

  json.following user.following do |followed_user|
    json.id followed_user.id
    json.username followed_user.username
  end
end
