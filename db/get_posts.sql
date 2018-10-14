SELECT * FROM posts
INNER JOIN users ON posts.user_id = users.user_id;