import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginContainer from '../component/LoginContainer.jsx';

import {
    inputUserName,
    inputPassword,
    loginIn,
} from '../action';

const Login = ({ state, actions }) => (
    <LoginContainer
        state={{
            userName: state.userName,
            passWord: state.passWord,
            loginErrorMessage: state.loginErrorMessage,
        }}
        actions={{
            inputUserName: actions.inputUserName,
            inputPassword: actions.inputPassword,
            loginIn: actions.loginIn,
        }}
    />
)

const mapStateToProps = state => ({
    state: {
        userName: state.get('userName'),
        passWord: state.get('passWord'),
        loginErrorMessage: state.get('loginErrorMessage'),
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        inputUserName,
        inputPassword,
        loginIn,
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
