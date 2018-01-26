import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as shoppingCartActions from '../actions'

import ShoppingCart from '../components/ShoppingCart.jsx'

class ShoppingCartContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { state, actions } = this.props

        return (
            <ShoppingCart
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
    console.log('development state: ', JSON.stringify(state.shoppingCart))

    return {
        state: state.shoppingCart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            ...shoppingCartActions,
        }, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShoppingCartContainer))
