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
        console.log('query state: ', JSON.stringify(state))

        return (
            <div>
                <div className="query">{state.queryState}</div>
                <LeftContent
                    state={{
                        leftContentState: state.developmentQueryLeftContentState,
                    }}
                />
                <RightContent
                    state={{
                        rightContentState: state.developmentQueryRightContentState,
                    }}
                />
            </div>
        )
    }
}

export default Query
