import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'

class Collaboration extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('Collaboration componentDidMount')
    }

    componentWillMount() {
        console.log('Collaboration componentWillMount')
    }

    componentWillUnmount() {
        console.log('Collaboration componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('Collaboration componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('Collaboration componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        console.log('collaboration state: ', JSON.stringify(state))

        return (
            <div>
                <div>{state.collaborationState}</div>
                <LeftContent
                    state={{
                        leftContentState: state.developmentCollaborationLeftContentState,
                    }}
                />
                <RightContent
                    state={{
                        rightContentState: state.developmentCollaborationRightContentState,
                    }}
                />
            </div>
        )
    }
}

export default Collaboration
