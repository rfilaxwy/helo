SELECT * FROM posts
INNER JOIN users on users.user_id=posts.user_id
WHERE title LIKE concat('%',$1,'%') AND posts.user_id !=$2;