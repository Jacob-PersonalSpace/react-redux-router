import React, { Component } from 'react'
import { render } from 'react-dom'

import '../css/fcrReject.less'

class FCRReject extends Component {
    constructor(props) {
        super(props)
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
        console.log('FCRReject state: ', JSON.stringify(state))

        return (
            <div>
                <div className="fcrreject">{state.fcrRejectState}</div>
            </div>
        )
    }
}

export default FCRReject
