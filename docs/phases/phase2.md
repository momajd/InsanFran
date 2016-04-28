# Phase 2: Posts, Comments, Likes (~3 days)

## Rails
### Models
* Post
* Comment
* Like

### Controllers
* Api::PostsController (create, destroy, index, show) Need update?
* Api::CommentsController (create, destroy)
* Api::LikesController (create, destroy)

### Views
* api/posts/index.json.jbuilder
* api/posts/show.json.jbuilder
* api/comments/show.json.jbuilder
* api/likes/show.json.jbuilder
* api/relationships/show.json.jbuilder

## Flux
### Views (React Components)
* frontend/components/post/Index.jsx
* frontend/components/post/postIndexItem.jsx
* frontend/components/post/postHeader.jsx
* frontend/components/post/postPicture.jsx
* frontend/components/post/numLikes.jsx
* frontend/components/post/comment/commentIndex.jsx
* frontend/components/post/comment/commentIndexItem.jsx
* frontend/components/post/comment/commentBox.jsx
* frontend/components/post/comment/like.jsx
* frontend/components/post/comment/commentForm.jsx

### Stores
* frontend/stores/post.js

### Actions

### ApiUtil
* frontend/util/apiUtil.js

## Gems/Libraries
* Flux Dispatcher (npm)
