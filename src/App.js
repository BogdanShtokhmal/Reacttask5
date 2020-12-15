import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={'/users'}>
                              to users
                        </Link>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path={'/users'} render={()=> {return <Users/>}} />

                    </Switch>
                </div>


            </div>

        </Router>

    );
  }
}

export default App;
