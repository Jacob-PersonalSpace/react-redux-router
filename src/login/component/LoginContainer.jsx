import React, { Component } from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <span>user name</span>
                <input id="username" type="text" value={state.userName} onChange={evt => actions.inputUserName(evt.target.value)} />
                <span>password</span>
                <input id="password" type="password" value={state.passWord} onChange={evt => actions.inputPassword(evt.target.value)} />
                <button id="loginButton" onClick={() => actions.loginIn()}>Login In</button>
                <button onClick={() => this.props.history.push('/regist')}>Regist</button>
                {
                    state.loginErrorMessage
                        ? <div>
                            <span style={{ color: 'red' }} id="loginErrorMessage">{state.loginErrorMessage}</span>
                        </div>
                        : null
                }
            </div>
        )
    }
}

export default withRouter(LoginContainer);
