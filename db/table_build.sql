-- CREATE TABLE users(
--   user_id serial PRIMARY KEY,
--   username VARCHAR (50) NOT NULL,
--   password VARCHAR (50) NOT NULL
-- )
-- CREATE TABLE posts(
-- postid  serial PRIMARY KEY,
-- user_id INTEGER REFERENCES users(user_id)

-- )
-- insert into posts(user_id, post,title)
-- values(20,'Hello', 'Greeting'),
-- (21,'stuff', 'Entry1'),
-- (22,'More stuff', 'An entry');