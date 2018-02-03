import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'
import PureComponent from '../../components/PureComponent.jsx'

import '../css/collaboration.less'

class Collaboration extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('Collaboration componentDidMount')
    }

    componentWillMount() {
        console.log('Collaboration componentWillMount')
    }

    componentWillUnmount() {
        console.log('Collaboration componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('Collaboration componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('Collaboration componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('collaboration component state: ', state.toJS())

        return (
            <div>
                <div className="collaboration">{state.get('collaborationState')}</div>
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

export default Collaboration
