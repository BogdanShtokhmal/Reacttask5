import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "../user/User";

import {Route, Switch, withRouter} from 'react-router-dom';
import Fulluser from "../fulluser/Fulluser";
import Posts from "../Posts/Posts";


class Users extends Component {
    UserService=new UserService();
    state={users:[]}
   async componentDidMount() {
       const users= await this.UserService.users();
       this.setState({users});


    }

    render() {
        const {users}=this.state;
        const {match:{url}}=this.props
        return (
            <div>
                {
                   users.map(value => <User item={value} key={value.id}/>)
                }

                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        const {match:{params:{id}}}=props
                        console.log(props)
                        return <Fulluser userId={id} key={id}/>}}/>


                    }} />


                </Switch>

                <hr/>
                
            </div>
        );
    }
}

export default withRouter(Users);