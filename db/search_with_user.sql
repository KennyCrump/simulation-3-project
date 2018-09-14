select posts.*, users.username, users.profile_pic from posts
join users on users.user_id = posts.author_id
where posts.content like ${search}