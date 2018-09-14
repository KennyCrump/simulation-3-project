import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Form extends Component{
    constructor(props){
        super(props)

        this.state={
            title: '',
            img: '',
            content: '',
            author: this.props.user_id,
            authorPicture: '',
            user_id: ''
        }

    }

    savePost = () => {
        // console.log("save props: ", this.props)
        axios.post(`/api/post/${this.props.user_id}`, {title: this.state.title, img: this.state.img, content: this.state.content}).then(
            window.location = 'http://localhost:3000/#/dashboard'
        )
    }

    handleChange(e){
        this.setState({
            // user_id: this.props.user_id,
             title: e.target.value
        })
    }
    
    submitPost = () => {

    }

    render(){
        console.log("props", this.props)
        return(
            <div>
                <input onChange={(e) => this.setState({title : e.target.value})}placeholder="title" type="text"/>
                <input onChange={(e) => this.setState({content :e.target.value})}placeholder="content" type="text"/>
                <input onChange={(e) => this.setState({img :e.target.value})}placeholder="img" type="text"/>
                <button onClick={this.savePost}>Save Post</button>
            </div>
        )
    }   
}

function mapStateToProps({user_id}){
    return {
        user_id
    }
}

export default connect(mapStateToProps,{})(Form)