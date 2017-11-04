import React, { Component } from 'react';
import { render } from 'react-dom';

class RegistContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <span>new user name</span>
                <input type="text" value={state.newUserName} onChange={evt => actions.inputNewUserName(evt.target.value)} />
                <span>new password</span>
                <input type="password" value={state.newPassword} onChange={evt => actions.inputNewPassword(evt.target.value)} />
                <span>confirm password</span>
                <input type="password" value={state.confirmPassword} onChange={evt => actions.inputConfirmPassword(evt.target.value)} />
                <button>Regist</button>
                <button onClick={() => actions.reset()}>Reset</button>
                <button onClick={() => actions.dumpToLogin()}>Back To Login</button>
            </div>
        )
    }
}

export default RegistContainer;
