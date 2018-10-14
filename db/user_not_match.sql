SELECT * FROM posts
INNER JOIN users on users.user_id=posts.user_id
WHERE posts.user_id !=$1;