import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'
import PureComponent from '../../components/PureComponent.jsx'

import '../css/fabricItem.less'

class FabricItem extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('FabricItem componentDidMount')
    }

    componentWillMount() {
        console.log('FabricItem componentWillMount')
    }

    componentWillUnmount() {
        console.log('FabricItem componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('FabricItem componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('FabricItem componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('fabricitem component state: ', state.toJS())

        return (
            <div>
                <div className="fabricitem">{state.get('fabricItemState')}</div>
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

export default FabricItem
