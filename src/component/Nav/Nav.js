import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props){
    let random = Math.floor(Math.random()*50);
    let profPicUrl = props.username ? `https://robohash.org/${props.username}.png`:`https://robohash.org/${random}.png`;//
    
    return(
        
        <div className='navComponent'>
            <div>
                
                <img className="avatar" src={profPicUrl} alt="User robo avatar."></img>
                <h4>Welcome {props.username} id {props.user_id}</h4>
            </div>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>

            
        </div>
    )
}

function mapStateToProps(state){
    const {username,profilePic} = state ;
    return{
        username,
        profilePic
    }
}

export default connect(mapStateToProps, {})(Nav);