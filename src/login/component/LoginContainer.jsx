import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router'

import Tap1 from './Tap1.jsx'
import Tap2 from './Tap2.jsx'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Login componentDidMount')
    }

    componentWillMount() {
        console.log('Login componentWillMount')
    }

    componentWillUnmount() {
        console.log('Login componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('Login componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('Login componentDidUpdate')
    }

    render() {
        const { state, actions, match, history } = this.props;

        return (
            <div>
                <span>user name</span>
                <input type="text" value={state.userName} onChange={evt => actions.inputUserName(evt.target.value)} />
                <span>password</span>
                <input type="password" value={state.passWord} onChange={evt => actions.inputPassword(evt.target.value)} />
                <button>Login In</button>
                <button onClick={() => actions.dumpToRegist()}>Regist</button>
                <button onClick={() => history.push(`${match.url}/tap1`)}>tap1</button>
                <button onClick={() => history.push(`${match.url}/tap2`)}>tap2</button>
                <Route path={`${match.url}/tap1`} component={Tap1} />
                <Route path={`${match.url}/tap2`} component={Tap2} />
            </div>
        )
    }
}

export default withRouter(LoginContainer);
