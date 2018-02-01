import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as pageHeaderActions from '../actions'

import PageHeader from '../components/PageHeader.jsx'

class PageHeaderContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { state, actions } = this.props

        console.debug('pageheader container state: ', state.toJS())

        return (
            <PageHeader
                state={state}
                actions={actions}
            />
        )
    }
}

const mapStateToProps = state => {
    console.debug('whole state tree: ', state.toJS())

    return {
        state: state.get('pageHeader'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            ...pageHeaderActions,
        }, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageHeaderContainer)
