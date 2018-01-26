import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../../../global/components/LeftContent.jsx'
import RightContent from '../../../../global/components/RightContent.jsx'

class HandLoom extends Component {
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
        console.log('handloom state: ', JSON.stringify(state))

        return (
            <div>
                <div>{state.handLoomState}</div>
                <LeftContent
                    state={{
                        leftContentState: state.shoppingCartHandLoomLeftContentState,
                    }}
                />
                <RightContent
                    state={{
                        rightContentState: state.shoppingCartHandLoomRightContentState,
                    }}
                />
            </div>
        )
    }
}

export default HandLoom
