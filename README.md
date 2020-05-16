# Social Media Sample Project

## Database Setup

```shell
$ mysql -u root
```

```mysql
create database socialmedia;

create user postman identified with mysql_native_password by 'socialmedia';

grant all privileges on socialmedia.*  to postman;

flush privileges;
```

## Project Structure

### Backend (Server)

```shell
src
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
├── public              # html/js/css files for static part of site
└── routes              # express middlewares (route wise)
```

### Frontend (Client Side Code)

```shell
src/public
├── app                                     # our own frontend js code
│   └── common.js
├── components                              # own own html snippets
│   └── navbar.html
├── css                                     # css libraries we are using
│   └── bootstrap.css
├── fonts                                   # fonts that we are using
│   ├── Muli-Italic.woff2
│   ├── Muli.woff2
│   └── muli.css
├── index.html                              # first / home page
└── js                                      # js libraries we are using
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js

```

## Business Logic

### Users

1. **create users**
   this will create a new user with a random username

### Posts

1. **create post**
   this will create a new post, required fields are

   - username (the author of this post)
   - title
   - body

2. **show all posts**
   list all existing posts, we should have following filtering support

   - filter by username
   - filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD`

### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**

## API Documentation

### `users`

1. `POST /users`

Creates a new user with random username and an user id

2. `GET /users/{userid}`

Get an user with a given user id

3. `GET /users/{username}`

Get an user with a given username

4 `GET /users`

Get all users from db

### `posts`

1. `GET /posts`

Get all posts by everyone

2. `POST /posts`

Create a new post.
Required fields in body -

```
userId=
title=
body=
```

### Comments

1.  `GET /comments/:post_id`
    gets all comments of a post

2.  `POST /comments`
    create a comment
    Required fields in body -
    ```
    user_id =
    post_id =
    comment_body=
    ```

```
C:.
│   server.js
│
├───controllers
│       comments.js
│       posts.js
│       users.js
│
├───db
│       comments.js
│       index.js
│       posts.js
│       users.js
│
├───public
│   │   index.html
│   │
│   ├───app
│   │       allposts.js
│   │       design.js
│   │       home.css
│   │       mypost.js
│   │       navbar.js
│   │       newpost.js
│   │
│   ├───components
│   │       allpost.html
│   │       footer.html
│   │       myposts.html
│   │       navbar.html
│   │       newpost.html
│   │
│   ├───css
│   │       bootstrap.css
│   │
│   ├───fonts
│   │   ├───Ubuntu
│   │   │       Ubuntu-Bold.ttf
│   │   │       Ubuntu-BoldItalic.ttf
│   │   │       Ubuntu-Italic.ttf
│   │   │       Ubuntu-Light.ttf
│   │   │       Ubuntu-LightItalic.ttf
│   │   │       Ubuntu-Medium.ttf
│   │   │       Ubuntu-MediumItalic.ttf
│   │   │       Ubuntu-Regular.ttf
│   │   │       UFL.txt
│   │   │
│   │   └───webfontkit
│   │       │   generator_config.txt
│   │       │   stylesheet.css
│   │       │   ubuntu-bold-demo.html
│   │       │   ubuntu-bold-webfont.woff
│   │       │   ubuntu-bold-webfont.woff2
│   │       │   ubuntu-bolditalic-demo.html
│   │       │   ubuntu-bolditalic-webfont.woff
│   │       │   ubuntu-bolditalic-webfont.woff2
│   │       │   ubuntu-italic-demo.html
│   │       │   ubuntu-italic-webfont.woff
│   │       │   ubuntu-italic-webfont.woff2
│   │       │   ubuntu-light-demo.html
│   │       │   ubuntu-light-webfont.woff
│   │       │   ubuntu-light-webfont.woff2
│   │       │   ubuntu-lightitalic-demo.html
│   │       │   ubuntu-lightitalic-webfont.woff
│   │       │   ubuntu-lightitalic-webfont.woff2
│   │       │   ubuntu-medium-demo.html
│   │       │   ubuntu-medium-webfont.woff
│   │       │   ubuntu-medium-webfont.woff2
│   │       │   ubuntu-mediumitalic-demo.html
│   │       │   ubuntu-mediumitalic-webfont.woff
│   │       │   ubuntu-mediumitalic-webfont.woff2
│   │       │   ubuntu-regular-demo.html
│   │       │   ubuntu-regular-webfont.woff
│   │       │   ubuntu-regular-webfont.woff2
│   │       │
│   │       └───specimen_files
│   │               grid_12-825-55-15.css
│   │               specimen_stylesheet.css
│   │
│   └───js
│           bootstrap.js
│           jquery-3.4.1.js
│           popper.js
│
├───routes
│   │   users.js
│   │
│   └───posts
│           comments.js
│           index.js
│
└───utility
        users.js
```
