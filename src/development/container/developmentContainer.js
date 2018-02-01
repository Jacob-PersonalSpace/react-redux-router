import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as developmentActions from '../actions'

import Development from '../components/Development.jsx'

// import { searchFabricCodeListPromise } from '../../util/api'

class DevelopmentContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // searchFabricCodeListPromise()
        console.log('DevelopmentContainer componentDidMount')
    }

    componentWillMount() {
        console.log('DevelopmentContainer componentWillMount')
    }

    componentWillUnmount() {
        console.log('DevelopmentContainer componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('DevelopmentContainer componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('DevelopmentContainer componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('development container state: ', state.toJS())

        return (
            <Development
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
        state: state.get('development'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            ...developmentActions,
        }, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(DevelopmentContainer))
