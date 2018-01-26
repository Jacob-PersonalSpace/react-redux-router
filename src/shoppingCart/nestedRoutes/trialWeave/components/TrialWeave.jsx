import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../../../global/components/LeftContent.jsx'
import RightContent from '../../../../global/components/RightContent.jsx'

class TrialWeave extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('TrialWeave componentDidMount')
    }

    componentWillMount() {
        console.log('TrialWeave componentWillMount')
    }

    componentWillUnmount() {
        console.log('TrialWeave componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('TrialWeave componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('TrialWeave componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        console.log('trialweave state: ', JSON.stringify(state))

        return (
            <div>
                <div>{state.trialWeaveState}</div>
                <LeftContent
                    state={{
                        leftContentState: state.shoppingCartTrialWeaveLeftContentState,
                    }}
                />
                <RightContent
                    state={{
                        rightContentState: state.shoppingCartTrialWeaveRightContentState,
                    }}
                />
            </div>
        )
    }
}

export default TrialWeave
