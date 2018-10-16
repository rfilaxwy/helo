import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './auth.css';
import {connect} from 'react-redux';
import {registerLogUser} from '../../ducks/reducer';




class Auth extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            user_id:'',
            password:'',
            profilePic:``
        }
        
    }

    registerUser(){
        const {username,password} = this.state;
        const profilePic = `https://robohash.org/${username}.png` //<img src=></img>
        
        axios.post('/api/users',{username,password,profilePic}).then((res)=>{
            debugger
            const user_id =res.data[0]['user_id'];
            this.props.registerLogUser(username,user_id,profilePic);
            this.setState({username:'',profilePic:'', password:''})
            this.props.history.push('/dashboard')
        })
    }

    loginUser(){
        const{username,password}= this.state;
        const profilePic = `https://robohash.org/${username}.png` 
        axios.post('/api/users',{username,password}).then((res)=>{
            
            const user_id =res.data[0]['user_id'];
            if(res.data){
                
                this.props.registerLogUser(username,user_id,profilePic)
                this.props.history.push('/dashboard')
                //need to push to state the res.data
            }else{
                console.log(`Username ${username} and password combo do not match our directory, try registering.`)
                debugger
                registerLogUser(username,user_id,profilePic)
            }
            
        })
    }

   handleusername(val){
       
       this.setState({username:val})
   }

   handlePassword(val){
       this.setState({password:val})
   }
   


    render(){
       
        return (
            <div className="holder">
                <div className="authTile" >
                    <h2>Helo</h2>
                    <img className='authLogo' alt ='Logo' src='https://i.pinimg.com/originals/4a/fd/77/4afd77d96144b3874326ba65b6195074.png'></img>
                    <div className="inputs">
                        <div><label for='usernameInput'>Username:</label> <input id='usernameInput' onChange={(e)=>{this.handleusername(e.target.value)}}></input></div>
                        <div><span>Password:</span> <input onChange={(e)=>{this.handlePassword(e.target.value)}}></input></div>
                        
                    </div>
                    
                    <div>
                        {/* buttons need to redirect to dasboard upon success thus not likely with the link because needs to be an async redirect */}
                        {/* Maybe use a creat parent around the buttons that fires asychronously after .then document.getElementByID(create parent LINK.redirect dashboard) */}
                        <button onClick={()=>{this.loginUser();registerLogUser(this.state.username,this.state.profilePic)}}>Login</button>
                        <button onClick={()=>this.registerUser()}>Register</button>
                    </div>
               </div>
            </div>
        )
        }
}

export default connect(null, {registerLogUser})(Auth);