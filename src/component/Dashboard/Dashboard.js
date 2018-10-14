import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            search:'',
            posts:[],
            checked:true
        }
        this.handleCheck=this.handleCheck.bind(this);
        this.search=this.search.bind(this);
    }

    componentDidMount(){
        let posts =[]
        axios.get('/api/posts').then(response=>{
            posts=[...response.data];
            this.setState({posts:posts})
        })
    }

    handleSearch(val){
        this.setState({search:val});
    }

    handleCheck(e){        
        const {checked} = e.target
        this.setState({checked:checked})
    }

    reset(){
        this.setState({search:''})
    }

    search(){
        
        const {user_id,search}= this.state;
        let posts=[];
        debugger
        if(this.state.search && this.state.checked){
            debugger
            //axios get all posts where title match
            axios.put(`/api/posts`,{search}).then(response=>{
                posts=[...response.data]
                this.setState({posts:posts})
            })
        }else if(!this.state.search && !this.state.checked){
            
            debugger//Return all posts except user posts
            axios.put(`/api/posts`,{params:{user_id}}).then(response=>{
                posts=[...response.data]
                this.setState({posts:posts})
            })
        }else if(this.state.search && !this.state.checked){
            debugger
            //Return sll posts with search title except users
            axios.put(`/api/posts`,{search,user_id}).then(response=>{
                posts=[...response.data]
                this.setState({posts:posts})
            })
        }else{
            debugger
            //return all psts
            axios.get(`/api/posts`).then(response=>{
                posts=[...response.data]
                this.setState({posts:posts})
            })
        }
    }

    render(){
        const {checked}=this.state;
        const posts =this.state.posts.map((post,index)=>
            {
                return(
                    <div className='post' key={index}>
                    <h3>{post.title}</h3>
                    <span>by {post.username}</span>
                    <p>{post.posts}</p>
                    </div>
                )
            })
        return(
            <div className="dashView">
                
                    <div className='dashPane'>
                        <input onChange={(e)=>this.handleSearch(e.target.value)}></input>
                        <button onClick={this.search}>Search logo</button>
                        <button onClick={this.reset}>Reset</button>
                        <span>My posts<input type="checkbox"  onChange={this.handleCheck} checked={checked}></input></span>
                    </div>
                    <div className='dashPane'>
                        {posts}
                    </div>
                
                
            </div>
        )
    }
}