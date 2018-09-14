import React, {Component} from 'react'

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }
    // componentDidMount(){
    //     axios.get(`/api/post/${post.post_id}`).then(post => {
    //         this.setState({
    //             post.
    //         })
    //     })
    // }
    getPostInfo = () => {
        //axios.get
    }

    render(){
        return(
            <div>
               <p>{`Title: ${this.props.title}`}</p>
               <p>{`content: ${this.props.content}`}</p>
               <p>{`author: ${this.props.username}`}</p> 
               <img src={this.props.img} alt=""/>
               <img src={this.props.profilePic} alt=""/>
            </div>
        )
    }   
}

export default Post