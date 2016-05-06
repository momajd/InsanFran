# InsanFran

[Live Link][heroku]

[heroku]: http://insanfran.herokuapp.com

## Minimum Viable Product

InsanFran is a web application inspired by Instagram that will be built using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [X] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an Instagram-inspired site, allowing users to: upload photos; follow other users; create, read, and delete posts; like posts; create, read, and delete comments
- [X] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

## Product Goals and Priorities

InsanFran will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [X] Create an account (MVP)
- [X] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Profile picture and profile (MVP)
- [ ] Connect with other users (MVP)
- [ ] Create, read, and delete posts (MVP)
- [ ] Infinite scroll (expected feature, but not MVP)
- [ ] Option to fit more photos on display (bonus feature, if time allows)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1 day)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Posts, Comments, and Likes (~3 days)

**Objective:** Posts can be created, read, edited and destroyed through
the API.

- [X] create `Post`, `Comment`, and `Like` model
- [X] seed the database with a small amount of test data
- [X] CRUD API for posts (`PostsController`)
- [X] jBuilder views for Posts, Comments, and Likes
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in the console.
- [X] setup the flux loop with skeleton files
- [X] setup React Router

### Phase 3: User profile and relationships (~3 days)

**Objective:** Users have a profile page to see their posts and can connect with other users

- [ ] create `Relationship` model
- [ ] jBuilder views for all Profile Components
- [ ] setup `clientActions` and `serverActions`
- [X] display posts on User's profile page


### Phase 4: Navigation Bar (~1 day)

**Objective:** All pages have functional navigation bar

- [X] create a basic style guide
- [ ] position elements on the page
- [X] add basic colors & styles

### Phase 5: Upload photos through UI (~1 day)

**Objective:** Users can upload photos and create posts through the UI

- [ ] create the form to upload photos
- [ ] finalize the form to submit posts (`postIndexItem` component)

### Phase 6: Finalize Styling (~1 day)

**Objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Infinite Scroll
- [ ] React-Masonry
- [ ] Add descriptions to posts
- [ ] Allow users to choose how many photos to display on a single row
- [ ] Add videos
- [ ] Add tags

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-five]: ./docs/phases/phase6.md
