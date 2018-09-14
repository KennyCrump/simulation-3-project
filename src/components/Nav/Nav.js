import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

class Nav extends Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            profile_pic: ''
        }
    }
    componentDidMount(){
        axios.get('/api/auth/me').then(res => {
            console.log('data:: ', res.data)
            // this.props.history.push()
            this.setState({
                username: res.data[0].username,
                profile_pic: res.data[0].profile_pic
            })
        })

    }

    // componentDidUpdate(prevProps){
    //     if(prevProps != this.props){
    //        this.props.match.history.push()
    //     }
    // }

    logout = () => {
        axios.post('/api/auth/logout', {}).then(
            console.log('goodbye'),
            window.location = "http://localhost:3000"
        )
    }

    render(){
        return(
            <div>
                <img className='profilePic' src={this.state.profile_pic} alt=""/>
                <p>{this.state.username}</p>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <button onClick={this.logout}>Logout</button>  
                
            </div>
        )
    }
}

function mapStateToProps({username, profile_pic}){
    return {
        username,
        profile_pic
    }
}

// const outputActions={

// }

export default connect(mapStateToProps)(Nav)
