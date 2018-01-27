import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'

class FabricItem extends Component {
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
        console.log('fabricitem state: ', JSON.stringify(state))

        return (
            <div>
                <div>{state.fabricItemState}</div>
                <LeftContent
                    state={{
                        leftContentState: state.developmentFabricItemLeftContentState,
                    }}
                />
                <RightContent
                    state={{
                        rightContentState: state.developmentFabricItemRightContentState,
                    }}
                />
            </div>
        )
    }
}

export default FabricItem
