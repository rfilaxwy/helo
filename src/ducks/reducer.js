const initialState ={
    username:'',
    user_id:'',
    profilePic:'',
    loggedUsername:'',
    loggedUser_id:'',
    loggedProfilePic:'',
}

const REGISTER_LOG_USER = 'REGISTER_LOG_USER';
const LOGGED_IN_USER = 'LOGGED_IN_USER';

export default function reducer(state=initialState,action){
    debugger
    let {payload} = action ;
    switch(action.type){
        case REGISTER_LOG_USER:
            debugger
            return Object.assign({}, state, {username:payload.username,user_id:payload.user_id,profilePic:payload.profilePic});
        // case:;
        default:
            return state;
    }
}

export function registerLogUser(username, user_id, profilePic){
    debugger
    return{
        type: REGISTER_LOG_USER,
        payload: {username,user_id,profilePic}
    }
}

