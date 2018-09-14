select posts.*, users.username, users.user_id, users.profile_pic from posts
join users on users.user_id = posts.author_id