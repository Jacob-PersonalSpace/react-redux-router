import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import LoginContainer from '../component/LoginContainer.jsx';

import {
    inputUserName,
    inputPassword,
    clickTreeNode,
    expandTree,
} from '../action';

const Login = ({ state, actions }) => (
    <LoginContainer
        state={{
            userName: state.userName,
            passWord: state.passWord,
            treeDataSource: state.treeDataSource,
        }}
        actions={{
            inputUserName: actions.inputUserName,
            inputPassword: actions.inputPassword,
            dumpToRegist: actions.dumpToRegist,
            clickTreeNode: actions.clickTreeNode,
            expandTree: actions.expandTree,
        }}
    />
)

const mapStateToProps = state => ({
    state: {
        userName: state.userName,
        passWord: state.passWord,
        treeDataSource: state.treeDataSource,
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        inputUserName,
        inputPassword,
        dumpToRegist: () => push('/regist'),
        clickTreeNode,
        expandTree,
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
