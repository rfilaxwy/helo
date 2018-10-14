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
            console.log(res.data)
            registerLogUser(res.data.username,res.data.password,res.data.profilePic);
            this.setState({username:'',profilePic:'', password:''})
            this.props.history.push('/dashboard')
        })
    }

    loginUser(){
        const{username,password}= this.state;
        axios.post('/api/login',{username,password}).then((res)=>{
            if(res.users){
                this.props.history.push('/dashboard')
            }else{
                console.log(`Username ${username} and password combo do not match our directory, try registering.`)
            }
            registerLogUser()
        })
    }

   handleusername(val){
       
       this.setState({username:val})
   }

   handlePassword(val){
       this.setState({password:val})
   }
   


    render(){
        const {profilePic}=this.state;
        return (
            <div className="holder">
                <div className="authTile" >
                    <h2>Helo</h2>
                    <img alt ='Logo' src={profilePic}></img>
                    <div className="inputs">
                        <div><span>Username:</span> <input onChange={(e)=>this.handleusername(e.target.value)}></input></div>
                        <div><span>Password:</span> <input onChange={(e)=>{this.handlePassword(e.target.value)}}></input></div>
                        
                    </div>
                    
                    <div>
                        {/* buttons need to redirect to dasboard upon success thus not likely with the link because needs to be an async redirect */}
                        {/* Maybe use a creat parent around the buttons that fires asychronously after .then document.getElementByID(create parent LINK.redirect dashboard) */}
                        <Link to='/dashboard'><button onClick={()=>this.loginUser()}>Login</button></Link>
                        <Link to='/dashboard'><button onClick={()=>this.registerUser()}>Register</button></Link>
                    </div>
               </div>
            </div>
        )
        }
}

export default connect(null, {registerLogUser})(Auth);