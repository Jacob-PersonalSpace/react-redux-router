import React from 'react';
import { Route, Link, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Login from './login/container/Login';
import Regist from './regist/container/Regist';

const Router = () => (
    <div>
        <main>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route path="/regist" component={Regist} />
        </main>
    </div>
)

export default Router;
