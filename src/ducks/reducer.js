// import { userInfo } from "os";

const initialState = {
    username: '',
    user_id: '',
    profile_pic: ''
    // posts: ''
}

// const UPDATE_POSTS = 'UPDATE_POSTS'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const UPDATE_USERNAME = 'UPDATE_USERNAME'


export function updateUserInfo(userInfo){
    return {
        type: UPDATE_USER_INFO,
        payload: userInfo
        // {
        //     user_id,
        //     username,
        //     profile_pic
        // }
    }
}
export function updateUsername(username){
    return{
        type: UPDATE_USERNAME,
        payload: username
    }
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USER_INFO:{
            let {user_id, username, profile_pic} = action.payload
            return Object.assign({}, state, {user_id, username, profile_pic})
        }
        // case UPDATE_USERNAME:{
        //     return Object.assign({}, state, {username: action.payload})
        // }


        default:{
            return state
        } 
    }
}