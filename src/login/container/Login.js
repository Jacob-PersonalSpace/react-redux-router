import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

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
            treeData: state.treeData,
        }}
        actions={{
            inputUserName: actions.inputUserName,
            inputPassword: actions.inputPassword,
            dumpToRegist: actions.dumpToRegist,
        }}
    />
)

const mapStateToProps = state => ({
    state: {
        userName: state.userName,
        passWord: state.passWord,
        treeData: state.treeData,
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        inputUserName,
        inputPassword,
        dumpToRegist: () => push('/regist'),
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
