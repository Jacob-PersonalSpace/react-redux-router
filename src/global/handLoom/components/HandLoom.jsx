import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'

import '../css/handloom.less'

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
                <div className="handloom">{state.handLoomState}</div>
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
