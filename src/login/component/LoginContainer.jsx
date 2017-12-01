import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <span>user name</span>
                <input type="text" value={state.userName} onChange={evt => actions.inputUserName(evt.target.value)} />
                <span>password</span>
                <input type="password" value={state.passWord} onChange={evt => actions.inputPassword(evt.target.value)} />
                <button>Login In</button>
                <button onClick={() => actions.dumpToRegist()}>Regist</button>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
}

export default LoginContainer;
