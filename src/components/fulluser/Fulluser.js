import React, {Component} from 'react';
import UserService from "../../services/UserService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';
import Posts from "../Posts/Posts";

class Fulluser extends Component {
    state={user:null};
    Userservice=new UserService();

 async   componentDidMount() {
        const {userId}=this.props;
       const user= await this.Userservice.user(userId);
        this.setState({user})
     console.log(this.props)
    }

    render() {
        const {user}=this.state;
        const {match:{url}, userId}=this.props;
        console.log(url, userId);

        return (
            <div>
                {user && <div>{user.id}-{user.name}-{user.email} --- <Link to={url+'/posts'}> Post</Link></div>}

                <hr/>
                <Switch>
                    <Route path={url+'/posts'} render={(props)=>{
                        console.log(props)

                        return <Posts userId={userId} key={userId}/>;
                    }

                    }/>

                </Switch>

                <hr/>
            </div>


        );
    }
}

export default withRouter(Fulluser);