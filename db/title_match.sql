SELECT * 
FROM posts
INNER JOIN users ON users.user_id=posts.user_id
WHERE title LIKE concat('%',$1,'%');