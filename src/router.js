import React from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';

import Login from './login/container/Login';
import Regist from './regist/container/Regist';
import Tap1 from './login/component/Tap1.jsx';
import Tap2 from './login/component/Tap2.jsx';

const Router = () => (
    <div>
        <main>
            {/* <Route exact path="/" component={Login}></Route> */}
            <Route path="/login" component={Login}>
                <Route path="/tap1" children={Tap1} />
            </Route>
            {/* <Route path="/regist" component={Regist} /> */}
        </main>
    </div>
)

export default Router;
