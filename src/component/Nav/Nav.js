import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props){
    let random = Math.floor(Math.random()*50);
    let profPicUrl = props.username ? `https://robohash.org/${props.username}.png`:`https://robohash.org/${random}.png`;//
    console.log(profPicUrl)
    return(
        
        <div>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>

            <div>
                <h4>Welcome {props.username}</h4>
                <img src={profPicUrl}></img>
            </div>
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