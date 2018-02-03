import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import PureComponent from './PureComponent.jsx'

import '../css/rightContainer.less'

class RightContainer extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('RightContainer componentDidMount')
    }

    componentWillMount() {
        console.log('RightContainer componentWillMount')
    }

    componentWillUnmount() {
        console.log('RightContainer componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('RightContainer componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('RightContainer componentDidUpdate')
    }

    render() {
        const { state, actions, style, children } = this.props

        return <div className="right-container" style={style}>
            {
                children
            }
        </div>
    }
}

RightContainer.propTypes = {
    children: PropTypes.element,
    style: PropTypes.shape({
        left: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
    }),
}

export default RightContainer
