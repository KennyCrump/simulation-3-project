import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

// import updateUserInfo from '../../ducks/reducer'
import {updateUserInfo} from '../../ducks/reducer'

class Auth extends Component{
    constructor(props){
        super(props)
        this.state ={
            username: '',
            password: ''
        }
    }

    login = (username, password) =>{
        axios.post('/api/auth/login', {username, password}).then(user => {
            let {user_id, username, profile_pic } = user.data
            console.log("userData: ", user.data)
            this.props.updateUserInfo({user_id, username, profile_pic})
            window.location = 'http://localhost:3000/#/dashboard'
        })
    }

    register = (username, password) => {
        axios.post('/api/auth/register', {username, password}).then(user => {
            let {user_id, username, profile_pic } = user.data
            console.log(user.data)
            this.props.updateUserInfo({user_id, username, profile_pic})
            // this.props.updateUsername(username)
            window.location = 'http://localhost:3000/#/dashboard'
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={(e) => this.setState({username: e.target.value})}/>
                <input type="text" onChange={(e) => this.setState({password: e.target.value})}/>
                <button onClick={() => this.login(this.state.username, this.state.password)}>Login</button>
                <button onClick={() => this.register(this.state.username, this.state.password)}>Register</button>
            </div>
        )
    }   
}

function mapStateToProps(appState){
    return {

    }
}

const outputActions={
    updateUserInfo
    // updateUsername
}

export default connect(mapStateToProps, outputActions)(Auth)


