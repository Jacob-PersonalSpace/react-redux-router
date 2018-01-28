import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'

import PureComponent from '../../components/PureComponent.jsx'
import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'
import FCRNew from '../../FCRNew/components/FCRNew.jsx'
import FCRReject from '../../FCRReject/components/FCRReject.jsx'

import '../css/fcr.less'

class FCR extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('FCR componentDidMount')
    }

    componentWillMount() {
        console.log('FCR componentWillMount')
    }

    componentWillUnmount() {
        console.log('FCR componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('FCR componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('FCR componentDidUpdate')
    }

    render() {
        const { state, actions, match, history } = this.props
        const { fcrNewState, fcrRejectState } = state
        console.log('fcr state: ', JSON.stringify(state))

        return (
            <div>
                <div className="fcr">{state.fcrState}</div>
                <LeftContent
                    state={{
                        leftContentState: state.shoppingCartFCRLeftContentState,
                    }}
                />
                <RightContent
                    state={{
                        rightContentState: state.shoppingCartFCRRightContentState,
                    }}
                >
                    <button onClick={() => history.push(`${match.url}/new`)}>NEW</button>
                    <button onClick={() => history.push(`${match.url}/reject`)}>REJECT</button>

                    <Switch>
                        <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/new`} />} />
                        <Route path={`${match.url}/new`} render={() => <FCRNew
                            state={{
                                ...fcrNewState,
                            }}
                        />} />
                        <Route path={`${match.url}/reject`} render={() => <FCRReject
                            state={{
                                ...fcrRejectState,
                            }}
                        />} />
                        <Redirect to={`${match.url}/new`} />
                    </Switch>
                </RightContent>
            </div>
        )
    }
}

export default withRouter(FCR)
