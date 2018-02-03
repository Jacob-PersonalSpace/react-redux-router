import React, { Component } from 'react'
import { render } from 'react-dom'
import { withRouter } from 'react-router-dom'

import PureComponent from '../components/PureComponent.jsx'

import '../css/shoppingCartEntrance.less'

class ShoppingCartEntrance extends PureComponent {
    constructor(props) {
        super(props)

        this.goToShoppingCartHandLoom = this.goToShoppingCartHandLoom.bind(this)
        this.goToShoppingCartTrialWeave = this.goToShoppingCartTrialWeave.bind(this)
        this.goToShoppingCartFCR = this.goToShoppingCartFCR.bind(this)
    }

    componentDidMount() {
        console.log('ShoppingCartEntrance componentDidMount')
    }

    componentWillMount() {
        console.log('ShoppingCartEntrance componentWillMount')
    }

    componentWillUnmount() {
        console.log('ShoppingCartEntrance componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('ShoppingCartEntrance componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('ShoppingCartEntrance componentDidUpdate')
    }

    goToShoppingCartHandLoom() {
        this.props.history.push('/shoppingCart/handloom')
    }

    goToShoppingCartTrialWeave() {
        this.props.history.push('/shoppingCart/trialweave')
    }

    goToShoppingCartFCR() {
        this.props.history.push('/shoppingCart/fcr')
    }

    render() {
        const { state, actions } = this.props

        return (
            <div>
                <div className="shoppingcartentrance">Shopping Cart Entrance</div>
                <button onClick={() => this.goToShoppingCartHandLoom()}>Go To Handloom</button>
                <button onClick={() => this.goToShoppingCartTrialWeave()}>Go To Trialweave</button>
                <button onClick={() => this.goToShoppingCartFCR()}>Go To Fcr</button>
            </div>
        )
    }
}

export default withRouter(ShoppingCartEntrance)
