select posts.*, users.username, users.profile_pic from posts
join users on users.user_id = posts.author_id
where post_id = ${postid}