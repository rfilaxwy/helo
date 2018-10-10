import React,{Component} from 'react';
import {Link} from 'react-router-dom';



export default class Auth extends Component{
    constructor(){
        super()
        this.state={
            firstname:'',
            lastname:'',
            password:'',
            email:''
        }
    }

   handleFirstname(val){
       this.setState({firstname:val})
   }
   handleLastname(val){
    this.setState({lastname:val})
    }
   handlePassword(val){
       this.setState({password:val})
   }
   handleEmail(val){
       this.setState({email:val})
   }


    render(){
        return (
            <div>
                <div>
                    <input onClick={(e)=>this.handleFirstname(e.target.value)} placeholder='Firstname'></input>
                    <input onClick={(e)=>{this.handleLastname(e.target.value)}} placeholder='Lastname'></input>
                    <input onClick={(e)=>{this.handlePassword(e.target.value)}} placeholder='Password'></input>
                    <input onClick={(e)=>{this.handleEmail(e.target.value)}} placeholder='Email'></input>
                </div>
               <div>
                   <Link to='/dashboard'><button>Login</button></Link>
                   <Link to='/'><button>Register</button></Link>
               </div>
            </div>
        )
        }
}