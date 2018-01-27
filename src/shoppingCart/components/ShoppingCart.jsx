import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, withRouter } from 'react-router-dom'

import HandLoom from '../../global/handLoom/components/HandLoom.jsx'
import TrialWeave from '../../global/trialWeave/components/TrialWeave.jsx'
import FCR from '../../global/FCR/components/FCR.jsx'

class ShoppingCart extends Component {
    constructor(props) {
        super(props)

        this.backToDevelopment = this.backToDevelopment.bind(this)
    }

    componentDidMount() {
        console.log('ShoppingCart componentDidMount')
    }

    componentWillMount() {
        console.log('ShoppingCart componentWillMount')
    }

    componentWillUnmount() {
        console.log('ShoppingCart componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('ShoppingCart componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('ShoppingCart componentDidUpdate')
    }

    backToDevelopment() {
        this.props.history.push('/development')
    }

    render() {
        const { state, actions, match, history } = this.props
        const { handLoomState, trialWeaveState, fcrState } = state
        console.log('shoppingcart state: ', JSON.stringify(state))

        return (
            <div>
                <button onClick={() => this.backToDevelopment()}>Back To Development</button>
                <button onClick={() => history.push(`${match.url}/handloom`)}>handloom</button>
                <button onClick={() => history.push(`${match.url}/trialweave`)}>trialweave</button>
                <button onClick={() => history.push(`${match.url}/fcr`)}>fcr</button>
                <Route path={`${match.url}/handloom`} render={() => <HandLoom
                    state={{
                        ...handLoomState,
                    }}
                />} />
                <Route path={`${match.url}/trialweave`} render={() => <TrialWeave
                    state={{
                        ...trialWeaveState,
                    }}
                />}  />
                <Route path={`${match.url}/fcr`} render={() => <FCR
                    state={{
                        ...fcrState,
                    }}
                />}   />
            </div>
        )
    }
}

export default withRouter(ShoppingCart)
