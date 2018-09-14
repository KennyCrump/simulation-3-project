DROP TABLE IF EXISTS users, posts;


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users (user_id)
)

