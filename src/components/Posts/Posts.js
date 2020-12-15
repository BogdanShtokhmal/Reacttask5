import React, {Component} from 'react';
import {Link, Route, Switch,withRouter} from "react-router-dom";
import Comments from "../comments/Comments";
import Post from "../Post/Post";
import Fulluser from "../fulluser/Fulluser";


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

        const {match:{url}}=this.props;
        console.log(this.props);

        return (
            <div>
                {
                    posts.map(value =><Post item={value} />)
                }
                <hr/>
                <Switch>
                    <Route path={url+'/:id'+'/comments'} render={(props)=>{
                        const {match:{params:{id}}}=props
                        console.log(props)
                        return <Comments postId={id} key={id}/>}}/>


                    }} />


                </Switch>

                <hr/>



            </div>
        );
    }
}

export default withRouter(Posts);