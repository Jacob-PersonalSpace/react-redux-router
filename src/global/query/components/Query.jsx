import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'

import '../css/query.less'

class Query extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('Query componentDidMount')
    }

    componentWillMount() {
        console.log('Query componentWillMount')
    }

    componentWillUnmount() {
        console.log('Query componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('Query componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('Query componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('query component state: ', state.toJS())

        return (
            <div>
                <div className="query">{state.get('queryState')}</div>
                <LeftContent
                    state={state.get('leftContentState')}
                />
                <RightContent
                    state={state.get('rightContentState')}
                />
            </div>
        )
    }
}

export default Query
