import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginContainer from '../component/LoginContainer.jsx';

import {
    inputUserName,
    inputPassword,
} from '../action';

class Login extends Component {
    constructor(props) {
        super(props)

        this.dumpToRegist = this.dumpToRegist.bind(this)
    }

    dumpToRegist() {
        this.props.history.push('/regist')
    }

    render() {
        const { state, actions } = this.props

        return (
            <LoginContainer
                state={{
                    userName: state.userName,
                    passWord: state.passWord,
                }}
                actions={{
                    inputUserName: actions.inputUserName,
                    inputPassword: actions.inputPassword,
                    dumpToRegist: this.dumpToRegist,
                }}
            />
        )
    }
}

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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login));
