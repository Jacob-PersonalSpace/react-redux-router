import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'

import PureComponent from '../../global/components/PureComponent.jsx'

import bindFunctions from '../../util/bind-functions'

// import HandLoom from '../../global/handLoom/components/HandLoom.jsx'
// import TrialWeave from '../../global/trialWeave/components/TrialWeave.jsx'
// import FCR from '../../global/FCR/components/FCR.jsx'

import '../css/shoppingCart.less'

class ShoppingCart extends PureComponent {
    constructor(props) {
        super(props)

        bindFunctions.call(this, ['backToDevelopment'])
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

        console.debug('shoppingcart component state: ', state.toJS())

        return (
            <div>
                <div className="shoppingCart">ShoppingCart Page</div>
                <button onClick={() => this.backToDevelopment()}>Back To Development</button>
                <button onClick={() => history.push(`${match.url}/handloom`)}>handloom</button>
                <button onClick={() => history.push(`${match.url}/trialweave`)}>trialweave</button>
                <button onClick={() => history.push(`${match.url}/fcr`)}>fcr</button>

                {/* <Switch>
                    <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/handloom`} />} />
                    <Route path={`${match.url}/handloom`} render={() => <HandLoom
                        state={state.get('handLoomState')}
                    />} />
                    <Route path={`${match.url}/trialweave`} render={() => <TrialWeave
                        state={state.get('trialWeaveState')}
                    />} />
                    <Route path={`${match.url}/fcr`} render={() => <FCR
                        state={state.get('fcrState')}
                    />} />
                    <Redirect to={`${match.url}/handloom`} />
                </Switch> */}
            </div>
        )
    }
}

export default withRouter(ShoppingCart)
