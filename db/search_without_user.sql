select posts.*, users.username, users.profile_pic from posts
join users on users.user_id = posts.author_id
where author_id != ${userid} and
posts.content like ${search}