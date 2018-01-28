import React, { Component } from 'react'
import { render } from 'react-dom'

import bindFunctions from '../../../util/bind-functions'

import '../css/fcrReject.less'

class FCRReject extends Component {
    constructor(props) {
        super(props)

        bindFunctions.call(this, ['onClickFunction'])
    }

    onClickFunction() {
        console.log('auto bind onClickFucntion to this')
    }

    componentDidMount() {
        console.log('FCRReject componentDidMount')
    }

    componentWillMount() {
        console.log('FCRReject componentWillMount')
    }

    componentWillUnmount() {
        console.log('FCRReject componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('FCRReject componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('FCRReject componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('fcrreject component state: ', state.toJS())

        return (
            <div>
                <div className="fcrreject">{state.get('fcrRejectState')}</div>
            </div>
        )
    }
}

export default FCRReject
