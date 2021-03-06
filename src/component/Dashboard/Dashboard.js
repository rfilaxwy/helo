import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';
import {connect} from 'react-redux';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            search:'',
            posts:[],
            
            checked:true
        }
        this.handleCheck=this.handleCheck.bind(this);
        this.search=this.search.bind(this);
        this.reset=this.reset.bind(this);
    }

    componentDidMount(){
        
        let posts =[];

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
        let posts =[];

        axios.get('/api/posts').then(response=>{
            posts=[...response.data];
            this.setState({posts:posts})
        })
    }


    //Change the req.body to parameter for user_id and query for search string.
    search(){
        const {user_id} =this.props;
        const {search}= this.state;
        let posts=[];
        debugger
        if(search && this.state.checked){
            debugger
            //axios get all posts where title match
            axios.put(`/api/posts`,{search}).then(response=>{
                posts=[...response.data]
                this.setState({posts:posts})
            })
        }else if(!search && !this.state.checked){
            
            debugger//Return all posts except user posts
            axios.put(`/api/posts`,{params:{user_id}}).then(response=>{
                posts=[...response.data]
                this.setState({posts:posts})
            })
        }else if(search && !this.state.checked){
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
                        <button onClick={this.search}>Search</button>
                        <button onClick={this.reset}>Reset</button>
                        <label for='checkBox'>My posts</label><input id='checkBox'type="checkbox"  onChange={this.handleCheck} checked={checked}></input>
                    </div>
                    <div className='dashPane'>
                        {posts}
                    </div>
                
                
            </div>
        )
    }
}
function mapStateToProps(state){
    const {user_id}= state;
    return{

    }
}
export default connect(mapStateToProps,{})(Dashboard)
