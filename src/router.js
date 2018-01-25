// import React from 'react';
// import { Route, Link, Switch, BrowserRouter, Redirect } from 'react-router-dom';

// import Login from './login/container/Login';
// import Regist from './regist/container/Regist';

// const Router = () => (
//     <div>
//         <main>
//             <Route exact path="/" render={() => <Redirect to="/login" />} />
//             <Route path="/login" component={Login} />
//             <Route path="/regist" component={Regist} />
//         </main>
//     </div>
// )

// export default Router;

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Login from './login/container/Login'
import Regist from './regist/container/Regist'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/regist" component={Regist} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
