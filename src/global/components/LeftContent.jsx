import React, { Component } from 'react'
import { render } from 'react-dom'

import '../css/leftContent.less'

class LeftContent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('LeftContent componentDidMount')
    }

    componentWillMount() {
        console.log('LeftContent componentWillMount')
    }

    componentWillUnmount() {
        console.log('LeftContent componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('LeftContent componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('LeftContent componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        console.log('left content state: ', JSON.stringify(state))

        return (
            <div>
                <span className="leftcontent">{state.leftContentState}</span>
            </div>
        )
    }
}

export default LeftContent
