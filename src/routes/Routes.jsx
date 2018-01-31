import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import PageHeader from '../global/pageHeader/container/pageHeaderContainer'
import Development from '../development/container/developmentContainer'
import ShoppingCart from '../shoppingCart/container/shoppingCartContainer'
import JoAssign from '../joAssign/container/joAssignContainer'

const Routes = () => {
    return (
        <div>
            <PageHeader />
            <Router>
                <Switch>
                    <Route path="/development" component={Development} />
                    <Route path="/shoppingCart" component={ShoppingCart} />
                    <Route path="/joAssign" component={JoAssign} />
                    <Redirect to="/development/fabricitem" />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
