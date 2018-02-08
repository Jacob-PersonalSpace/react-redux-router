import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import PureComponent from '../../global/components/PureComponent.jsx'

import bindFunctions from '../../util/bind-functions'

import SheetSelector from '../../global/components/SheetSelector/SheetSelector.jsx'
import HandLoom from '../../global/handLoom/components/HandLoom.jsx'
import TrialWeave from '../../global/trialWeave/components/TrialWeave.jsx'
// import FCR from '../../global/FCR/components/FCR.jsx'

import '../css/shoppingCart.less'

import { SHOPPINGCART_SHEETS } from '../../constants/index'

class ShoppingCart extends PureComponent {
    constructor(props) {
        super(props)

        bindFunctions.call(this, [
            'backToDevelopment',
            'onChangeSheet',
        ])
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

    onChangeSheet(value) {
        // this.props.actions.shoppingCartActions.onChangeSheet(value)

        if (value === SHOPPINGCART_SHEETS[0].value) {
            this.props.history.push(`${this.props.match.url}/handloom`)
        }
        else if (value === SHOPPINGCART_SHEETS[1].value) {
            this.props.history.push(`${this.props.match.url}/trialweave`)
        }
        // else if (value === SHOPPINGCART_SHEETS[2].value) {
        //     this.props.history.push(`${this.props.match.url}/fcr`)
        // }
    }

    render() {
        const { state, actions, match, history } = this.props
        const { shoppingCart, masterDataState, userProfileState } = state

        console.log('????', shoppingCart)

        return (
            <div>
                <SheetSelector
                    state={{
                        sheets: shoppingCart.getIn(['sheetSelectorState', 'sheets']),
                        selectedSheet: shoppingCart.getIn(['sheetSelectorState', 'selectedSheet']),
                    }}
                    actions={{
                        onChangeSheet: this.onChangeSheet,
                    }}
                />

                <Switch>
                    <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/handloom`} />} />
                    <Route path={`${match.url}/handloom`} render={() => <HandLoom
                        // state={state.get('handLoomState')}
                    />} />
                    <Route path={`${match.url}/trialweave`} render={() => <TrialWeave
                        // state={state.get('trialWeaveState')}
                    />} />
                    {/* <Route path={`${match.url}/fcr`} render={() => <FCR
                        state={state.get('fcrState')}
                    />} /> */}
                    <Redirect to={`${match.url}/handloom`} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(ShoppingCart)
