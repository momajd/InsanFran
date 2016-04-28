# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

## Post Cycles

### Posts API Request Actions

* `fetchAllPosts`
  0. invoked from `Index` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receiveAllPosts` is set as the callback.

* `createPost`
  0. invoked from new Post button `onClick`
  0. `Post /api/posts` is called.
  0. `receiveSinglePost` is set as the callback.

* `fetchSinglePost`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id` is called.
  0. `receiveSinglePost` is set as the callback.

* `destroyPost`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/posts/:id` is called.
  0. `removePost` is set as the callback.

### Posts API Response Actions

* `receiveAllPosts`
  0. invoked from an API callback.
  0. `Post` store updates `_posts` and emits change.

* `receiveSinglePost`
  0. invoked from an API callback.
  0. `Post` store updates `_posts[id]` and emits change.

* `removePost`
  0. invoked from an API callback.
  0. `Post` store removes `_posts[id]` and emits change.

### Store Listeners

* `Index` component listens to `Post` store.
* `PostDetail` component listens to `Post` store.


## Comment Cycles

### Comments API Request Actions

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/comments` is called.
  0. `receiveAllComments` is set as the callback.

* `createComment`
  0. invoked from new Comment button `onClick`
  0. `Comment /api/posts/comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `fetchSingleComment`
  0. invoked from `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/comments/:id` is called.
  0. `receiveSingleComment` is set as the callback.

* `destroyComment`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/posts/comments/:id` is called.
  0. `removeComment` is set as the callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. `Comment` store updates `_comment` and emits change.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. `Comment` store updates `_comment[id]` and emits change.

* `removeComment`
  0. invoked from an API callback.
  0. `Comment` store removes `_comment[id]` and emits change.

### Store Listeners

* `CommentsIndex` component listens to `Comment` store.
* `CommentDetail` component listens to `Comment` store.

## Like Cycles

### Likes API Request Actions

* `createLike`
  0. invoked from new Like button `onClick`
  0. `Like /api/posts/likes` is called.
  0. `receiveSingleLike` is set as the callback.

* `fetchSingleLike`
  0. invoked from `LikeDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/likes/:id` is called.
  0. `receiveSingleLike` is set as the callback.

* `destroyLike`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/posts/likes/:id` is called.
  0. `removeLike` is set as the callback.

### Likes API Response Actions

* `receiveAllLikes`
  0. invoked from an API callback.
  0. `Like` store updates `_likes` and emits change.

* `receiveSingleLike`
  0. invoked from an API callback.
  0. `Like` store updates `_likes[id]` and emits change.

* `removeLike`
  0. invoked from an API callback.
  0. `Like` store removes `_likes[id]` and emits change.

### Store Listeners

* `LikesIndex` component listens to `Like` store.
* `LikeDetail` component listens to `Like` store.
