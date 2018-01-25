import React from 'react';
import {
    HashRouter as Router,
    Route, Link, Switch, BrowserRouter, Redirect
} from 'react-router-dom';

import Login from './login/container/Login';
import Regist from './regist/container/Regist';

const Routers = () => (
    <Router>
        <div>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route path="/regist" component={Regist} />
        </div>
    </Router>
)

export default Routers;
