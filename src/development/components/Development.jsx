import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'

import ShoppingCartEntrance from '../../global/components/ShoppingCartEntrance.jsx'
import Collaboration from '../../global/collaboration/components/Collaboration.jsx'
import Query from '../../global/query/components/Query.jsx'
import FabricItem from '../../global/fabricItem/components/FabricItem.jsx'

import '../css/development.less'

class Development extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('Developmentaaa componentDidMount')
    }

    componentWillMount() {
        console.log('Development componentWillMount')
    }

    componentWillUnmount() {
        console.log('Development componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('Development componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('Development componentDidUpdate')
    }

    render() {
        const { state, actions, match, history } = this.props
        const { collaborationState, queryState, fabricItemState } = state
        console.log('development state: ', JSON.stringify(state))

        return (
            <div>
                <div className="development">Development Page</div>
                <ShoppingCartEntrance />
                <button onClick={() => history.push(`${match.url}/collaboration`)}>collaboration</button>
                <button onClick={() => history.push(`${match.url}/query`)}>query</button>
                <button onClick={() => history.push(`${match.url}/fabricitem`)}>fabricItem</button>
                <Switch>
                    <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/fabricitem`} />} />
                    <Route path={`${match.url}/collaboration`} render={() => <Collaboration
                        state={{
                            ...collaborationState,
                        }}
                    />} />
                    <Route path={`${match.url}/query`} render={() => <Query
                        state={{
                            ...queryState,
                        }}
                    />} />
                    <Route path={`${match.url}/fabricitem`} render={() => <FabricItem
                        state={{
                            ...fabricItemState,
                        }}
                    />} />
                    <Redirect to={`${match.url}/fabricitem`} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Development)
