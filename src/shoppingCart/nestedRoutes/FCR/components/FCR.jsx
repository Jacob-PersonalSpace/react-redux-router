import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../../../global/components/LeftContent.jsx'
import RightContent from '../../../../global/components/RightContent.jsx'

class FCR extends Component {
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
        const { state, actions } = this.props
        console.log('fcr state: ', JSON.stringify(state))

        return (
            <div>
                <div>{state.fcrState}</div>
                <LeftContent
                    state={{
                        leftContentState: state.shoppingCartFCRLeftContentState,
                    }}
                />
                <RightContent
                    state={{
                        rightContentState: state.shoppingCartFCRRightContentState,
                    }}
                />
            </div>
        )
    }
}

export default FCR
