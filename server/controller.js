module.exports={
    register: (req, res) => {
        // console.log(req.body)
        let {username, password, profile_pic} = req.body
        if(!profile_pic){
            profile_pic = 'no picture'
        }
        const db = req.app.get('db')
        db.create_new_user({username, password, profile_pic}).then(user =>
        {
            console.log('reached here')
            req.session.user = user[0]
            console.log(req.session.user)
            res.status(200).send(req.session.user)
        })
        //new user
    },
    login: (req, res) => {
        const db = req.app.get('db')
        let{username, password} = req.body
        db.login({username, password}).then(user => {
            if(user[0]){
                req.session.user = user[0]
                console.log('session: ', req.session.user)
                res.status(200).send(req.session.user)
            }else{
                res.status(401).send('try again')
            }
        })
        //verify user
    },
    search: (req, res) => {
        // console.log(req.params.query)
        db = req.app.get('db')
        let {query, params} = req
        console.log(req.query)
        console.log(req.params)
        let search = decodeURI(query.search)
        if(query.userid === 'true' && query.search){
            console.log("hitting search w/ user")
            db.search_with_user({search: `%${search}%`}).then(posts => {
                res.status(200).send(posts)
            })
        }else if(query.userid === 'false' && query.search){
            console.log('hitting search w/o user')
            db.search_without_user({userid: req.session.user.user_id, search: `%${search}%`}).then(posts => {
                res.status(200).send(posts)
            })
        }else if(query.userid === 'false'){
            console.log('hitting search w/o user')
            db.get_posts_without_user({userid: req.session.user.user_id}).then(posts => {
                res.status(200).send(posts)
            })
        }else{
            console.log('req.session.user', req.session.user)
            console.log('hitting get all')
            db.get_posts().then(posts => {
                res.status(200).send(posts)
            })
        }
    },
    getPost: (req, res) => {
        db = req.app.get('db')
        db.get_single({postid: req.params.postid}).then(post => {
            res.status(200).send(post)
        })

        //post info
    },
    newPost: (req, res) => {
        db = req.app.get('db')
        let{title, img, content} = req.body
        let {userid} = req.params
        db.new_post({title, img, content, author_id: userid}).then(post => {
            console.log('post added')
            res.status(200).send(post)
        })
        
    },
    logout: (req, res) => {
      req.session.destroy()
    //   res.redirect('http://localhost:3000/')  
    },
    getSession: (req, res) => {
        req.app.get('db')
        let {user_id} = req.session.user
        db.get_session_user({user_id}).then(user => {
            res.status(200).send(user)
        })
    }


    // get: (req, res) => {
        
    // }

}