SELECT * 
FROM users
WHERE firstname=$1 and lastname = $2 and email=$3;