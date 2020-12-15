import React, {Component} from 'react';
import {Link, Route, Switch,withRouter} from "react-router-dom";
import Comments from "../comments/Comments";


class Posts extends Component {
    state={posts:[]}

componentDidMount() {
        const {userId}=this.props

    fetch('http://jsonplaceholder.typicode.com/posts?userId='+userId)
        .then(value => value.json())
        .then(value => {
            console.log(value);
    this.setState({posts:value})

        })

}


    render() {


                const {posts}=this.state;
        console.log(posts);
        const {match:{url}}=this.props;
        console.log(this.props);
        return (
            <div>
                {
                    posts.map(value => <div>{value.userId}-{value.id}-{value.title} ------<Link to={url+'/comments'}> Comments</Link></div>)
                }
                <hr/>
                <Switch>
                    <Route path={url+'/comments'} render={(props)=>{
                        console.log(props);


                        return <Comments/>;
                    }

                    }/>

                </Switch>

                <hr/>
            </div>
        );
    }
}

export default withRouter(Posts);