import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginContainer from '../component/LoginContainer.jsx';

import {
    inputUserName,
    inputPassword,
    loginIn,
    onSelectFabricItem,
    onChangeNodeExpanded,
    expandAll,
    collapseAll,
    expandOrCollapseNode,
    getTreeData,
} from '../action';

const Login = ({ state, actions }) => {
    return (<LoginContainer
        state={{
            userName: state.userName,
            passWord: state.passWord,
            treeData: state.treeData,
            fabricItemList: state.fabricItemList,
            selectedFabricItem: state.selectedFabricItem,
        }}
        actions={{
            inputUserName: actions.inputUserName,
            inputPassword: actions.inputPassword,
            loginIn: actions.loginIn,
            onSelectFabricItem: actions.onSelectFabricItem,
            onChangeNodeExpanded: actions.onChangeNodeExpanded,
            expandAll: actions.expandAll,
            collapseAll: actions.collapseAll,
            expandOrCollapseNode: actions.expandOrCollapseNode,
            getTreeData: actions.getTreeData,
        }}
    />)
}

const mapStateToProps = state => ({
    state: {
        userName: state.get('userName'),
        passWord: state.get('passWord'),
        treeData: state.get('treeData'),
        fabricItemList: state.get('fabricItemList'),
        selectedFabricItem: state.get('selectedFabricItem'),
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        inputUserName,
        inputPassword,
        loginIn,
        onSelectFabricItem,
        onChangeNodeExpanded,
        expandAll,
        collapseAll,
        expandOrCollapseNode,
        getTreeData,
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
