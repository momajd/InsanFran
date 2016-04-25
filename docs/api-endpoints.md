# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Posts

- `GET /api/posts`
- `POST /api/notes`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Likes
TODO: VERIFY THAT THESE SHOULD BE NESTED UNDER POSTS
- `POST /api/posts/likes`
- `DELETE /api/posts/likes/:id`

### Comments
TODO: VERIFY THAT THESE SHOULD BE NESTED UNDER POSTS
- `POST /api/posts/comments`
- `DELETE /api/posts/comments/:id`

### Relationships

- `POST /api/relationships`
- `DELETE /api/relationships/:id`
