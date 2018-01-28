import React, { Component } from 'react'
import { render } from 'react-dom'

import '../css/rightContent.less'

class RightContent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('RightContent componentDidMount')
    }

    componentWillMount() {
        console.log('RightContent componentWillMount')
    }

    componentWillUnmount() {
        console.log('RightContent componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('RightContent componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('RightContent componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('rightcontent component state: ', state.toJS())

        return (
            <div>
                <span className="rightcontent">{state.get('rightContentLabel')}</span>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default RightContent
