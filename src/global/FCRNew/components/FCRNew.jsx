import React, { Component } from 'react'
import { render } from 'react-dom'

import PureComponent from '../../components/PureComponent.jsx'

import '../css/fcrNew.less'

class FCRNew extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('FCRNew componentDidMount')
    }

    componentWillMount() {
        console.log('FCRNew componentWillMount')
    }

    componentWillUnmount() {
        console.log('FCRNew componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('FCRNew componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('FCRNew componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('fcrnew component state: ', state.toJS())

        return (
            <div>
                <div className="fcrnew">{state.get('fcrNewState')}</div>
            </div>
        )
    }
}

export default FCRNew
