const initialState ={
    username:'',
    user_id:'',
    profilePic:''
}

const REGISTER_LOG_USER = 'REGISTER_LOG_USER';

export default function reducer(state=initialState,action){
    let {payload} = action ;
    switch(action.type){
        case REGISTER_LOG_USER:
            return Object.assign({}, state, {username:payload.username,user_id:payload.user_id,profilePic:payload.profilePic});
        // case:;
        // case:;
        default:
            return state;
    }
}

export function registerLogUser(username, user_id, profilePic){
    return{
        type: REGISTER_LOG_USER,
        payload: {username,user_id,profilePic}
    }
}

