import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'

import Post from '../Post/Post'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

   componentDidMount(){
    //    console.log(this.props.id)
    //    axios.get(`/api/posts/${+this.props.user_id}`)
    console.log('component updated')
       if(this.state.search !== ''){
           console.log('search')
           let search = encodeURI(this.state.search)
           axios.get(`/api/posts/${+this.props.user_id}?userid=${this.state.userposts}&search=${search}`).then(posts =>
        this.setState({posts: posts.data}))
       }else{
           console.log('hello')
           axios.get(`/api/posts/${+this.props.user_id}?userid=${this.state.userposts}`).then(posts =>
            this.setState({posts: posts.data}))
       }
   }
   componentDidUpdate(prevProps){
       this.props.history.push
        if(prevProps !== this.state){
            if(this.state.search !== ''){
                console.log('search')
                let search = encodeURI(this.state.search)
                axios.get(`/api/posts/${+this.props.user_id}?userid=${this.state.userposts}&search=${search}`).then(posts =>
             this.setState({posts: posts.data}))
            }else{
                console.log('hello')
                axios.get(`/api/posts/${+this.props.user_id}?userid=${this.state.userposts}`).then(posts =>
                 this.setState({posts: posts.data}))
            }
        }
       console.log("prev props: ", prevProps)
   }


    resetSearch = () => {

    }

    render(){
        console.log(this.state)
        console.log(this.state.posts)
        console.log(this.props)
        let postList = this.state.posts.map( (post, index) => {
            console.log("post: ", post)
            return (<Link to={`/post/${post.post_id}`}>
                        <Post
                                key={post.post_index}
                                postId={post.post_id}
                                title={post.title}
                                content={post.content}
                                img={post.img}
                                userId={post.user_id}
                                username={post.username}
                                profilePic={post.profile_pic} />
                    </Link>)
        } )
        return(
            <div>Dashboard
                
                <input placeholder="search here" 
                onChange={(e) => this.setState({search: e.target.value})}
                type="text"/>
                <input type="checkbox" 
                    id='ownPosts'
                    value={this.state.userposts} 
                    onChange={() => this.setState({userposts: !this.state.userposts})}
                    defaultChecked='true' />
                    <label htmlFor="ownPosts">Include your own posts in feed</label>
            <h2>Posts</h2>
            {postList}
            </div>

            
        )
    }   
}

function mapStateToProps({user_id}){
    return {
        user_id
    }
}

export default connect(mapStateToProps, {})(Dashboard)