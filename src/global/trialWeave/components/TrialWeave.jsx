import React, { Component } from 'react'
import { render } from 'react-dom'

// import LeftContent from '../../components/LeftContent.jsx'
// import RightContent from '../../components/RightContent.jsx'
import PureComponent from '../../components/PureComponent.jsx'

import '../css/trialWeave.less'

class TrialWeave extends PureComponent {
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

        return (
            <div>
                <div className="trialweave">aaaa</div>
                {/* <LeftContent
                    state={state.get('leftContentState')}
                />
                <RightContent
                    state={state.get('rightContentState')}
                /> */}
            </div>
        )
    }
}

export default TrialWeave
