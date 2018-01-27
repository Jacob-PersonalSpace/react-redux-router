import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as developmentActions from '../actions'

import Development from '../components/Development.jsx'

class DevelopmentContainer extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
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

        return (
            <Development
                state={{
                    ...state,
                }}
                actions={{
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    console.log('development state: ', JSON.stringify(state.development))
    return {
        state: state.development,
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