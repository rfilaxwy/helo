import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';




export default class Auth extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
        
    }

    registerUser(){
        const {username,password} = this.state;
        const profilePic = `https://robohash.org/${username}.png` //<img src=></img>
        axios.post('/api/users',{username,password}).then(()=>{
            
            this.setState({username:'',password:''})
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
            /////NEED TO BUILD IN REDIRECT to dashboard

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
            <div>
                <div>
                    <input onChange={(e)=>this.handleusername(e.target.value)} placeholder='username'></input>
                    <input onChange={(e)=>{this.handlePassword(e.target.value)}} placeholder='Password'></input>
                    <img src='https://robohash.org/bronnnki.png'></img>
                </div>
               <div>
                   {/* buttons need to redirect to dasboard upon success thus not likely with the link because needs to be an async redirect */}
                  {/* Maybe use a creat parent around the buttons that fires asychronously after .then document.getElementByID(create parent LINK.redirect dashboard) */}
                   <Link to='/dashboard'><button onClick={()=>this.loginUser()}>Login</button></Link>
                   <Link to='/dashboard'><button onClick={()=>this.registerUser()}>Register</button></Link>
               </div>
            </div>
        )
        }
}