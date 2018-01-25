import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import RegistContainer from '../component/RegistContainer.jsx';

import * as actions from '../action';

class Regist extends Component {
    constructor(props) {
        super(props)

        this.dumpToLogin = this.dumpToLogin.bind(this)
    }

    dumpToLogin() {
        this.props.history.push('/login')
    }

    render() {
        const { state, actions } = this.props

        return (
            <RegistContainer
                state={{
                    newUserName: state.newUserName,
                    newPassword: state.newPassword,
                    confirmPassword: state.confirmPassword,
                }}
                actions={{
                    inputNewUserName: actions.inputNewUserName,
                    inputNewPassword: actions.inputNewPassword,
                    inputConfirmPassword: actions.inputConfirmPassword,
                    reset: actions.reset,
                    dumpToLogin: this.dumpToLogin,
                }}
            />
        )
    }
}

const mapStateToProps = state => ({
    state: {
        newUserName: state.newUserName,
        newPassword: state.newPassword,
        confirmPassword: state.confirmPassword,
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...actions,
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Regist);
