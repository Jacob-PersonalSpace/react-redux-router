import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import PageHeader from './global/pageHeader/components/PageHeader.jsx'
import Development from './development/components/Development.jsx'
import ShoppingCart from './shoppingCart/components/ShoppingCart.jsx'
import JoAssign from './joAssign/components/JoAssign.jsx'
import PureComponent from './global/components/PureComponent.jsx'

import * as developmentActions from './development/actions'
import * as shoppingCartActions from './shoppingCart/actions'
import * as joAssignActions from './joAssign/actions'
import * as pageHeaderActions from './global/pageHeader/actions'

class MainContainer extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('MainContainer componentDidMount')
    }

    componentWillMount() {
        console.log('MainContainer componentWillMount')
    }

    componentWillUnmount() {
        console.log('MainContainer componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('MainContainer componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('MainContainer componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { development, shoppingCart, joAssign, pageHeader } = state
        console.debug('main container state: ', {
            development: development.toJS(),
            shoppingCart: shoppingCart.toJS(),
            joAssign: joAssign.toJS(),
            pageHeader: pageHeader.toJS(),
        })

        return (
            <div>
                <PageHeader
                    state={pageHeader}
                    actions={{ ...actions.pageHeader }}
                />
                <Switch>
                    <Route path="/development" render={() => <Development
                        state={development}
                        actions={{ ...actions.development }}
                    />} />
                    <Route path="/shoppingCart" render={() => <ShoppingCart
                        state={shoppingCart}
                        actions={{ ...actions.shoppingCart }}
                    />} />
                    <Route path="/joAssign" render={() => <JoAssign
                        state={{ joAssign }}
                        actions={{ ...actions.joAssign }}
                    />} />
                    <Redirect to="/development/fabricitem" />
                </Switch>
            </div>
        )
    }
}

MainContainer.propTypes = {

}

const mapStateToProps = state => {
    console.debug('whole state tree: ', state.toJS())

    return {
        state: {
            development: state.get('development'),
            shoppingCart: state.get('shoppingCart'),
            joAssign: state.get('joAssign'),
            pageHeader: state.get('pageHeader'),
            global: state.get('global'),
        },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            development: bindActionCreators({ ...developmentActions, }, dispatch),
            shoppingCart: bindActionCreators({ ...shoppingCartActions, }, dispatch),
            joAssign: bindActionCreators({ ...joAssignActions, }, dispatch),
            pageHeader: bindActionCreators({ ...pageHeaderActions, }, dispatch),
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainContainer))
