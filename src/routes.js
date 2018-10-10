import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './component/Auth/Auth';
import DashBoard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';


export default (
    <Switch>
        <Route component={Auth} exact path='/'></Route>
        <Route component={DashBoard} path='/dashboard'></Route>
        <Route component={Post} path='/post/:postid'></Route>
        <Route component={Form} path='/new'></Route>
    </Switch>
)