import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'
import PureComponent from '../../components/PureComponent.jsx'

import '../css/handloom.less'

class HandLoom extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('HandLoom componentDidMount')
    }

    componentWillMount() {
        console.log('HandLoom componentWillMount')
    }

    componentWillUnmount() {
        console.log('HandLoom componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('HandLoom componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('HandLoom componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('handloom component state: ', state.toJS())

        return (
            <div>
                <div className="handloom">{state.get('handLoomState')}</div>
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

export default HandLoom
