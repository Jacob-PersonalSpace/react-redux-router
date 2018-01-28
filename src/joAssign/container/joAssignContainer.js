import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as joAssignActions from '../actions'

import JoAssign from '../components/JoAssign.jsx'

class joAssignContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { state, actions } = this.props

        console.debug('joAssign container state: ', state.toJS())

        return (
            <JoAssign
                state={state}
                actions={{
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    console.debug('whole state tree: ', state.toJS())

    return {
        state: state.get('joAssign'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            ...joAssignActions,
        }, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(joAssignContainer))
