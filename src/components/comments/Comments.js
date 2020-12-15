import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';


class Comments extends Component {
    state={comments:[]};



    componentDidMount() {
        const {postId}=this.props;
        fetch('http://jsonplaceholder.typicode.com/comments?postId='+postId)
         .then(value => value.json())
            .then(value => {
                console.log(value);
                this.setState({comments:value})

    })
}

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default withRouter(Comments);