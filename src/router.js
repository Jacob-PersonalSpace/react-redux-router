import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'

import Login from './login/container/Login'
import Regist from './regist/container/Regist'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/regist" component={Regist} />
                <Redirect to="/login"/>
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
