import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginContainer from '../component/LoginContainer.jsx';

import {
    inputUserName,
    inputPassword,
} from '../action';

const Login = ({ state, actions }) => (
    <LoginContainer
        state={{
            userName: state.userName,
            passWord: state.passWord,
        }}
        actions={{
            inputUserName: actions.inputUserName,
            inputPassword: actions.inputPassword,
        }}
    />
)

const mapStateToProps = state => ({
    state: {
        userName: state.userName,
        passWord: state.passWord,
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        inputUserName,
        inputPassword,
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
