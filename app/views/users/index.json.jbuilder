json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.profile_image_url user.profile_image_url
end
