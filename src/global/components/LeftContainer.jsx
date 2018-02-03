import React, { Component } from 'react'
import { render } from 'react-dom'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'

import PureComponent from './PureComponent.jsx'
import CollapsedDirectory from './CollapsedDirectory.jsx'

class LeftContainer extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('LeftContainer componentDidMount')
    }

    componentWillMount() {
        console.log('LeftContainer componentWillMount')
    }

    componentWillUnmount() {
        console.log('LeftContainer componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('LeftContainer componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('LeftContainer componentDidUpdate')
    }

    render() {
        const { state, actions, children } = this.props
        const { isExpanded } = state

        return isExpanded ?
            children :
            <CollapsedDirectory
                actions={{
                    onExpandDirectory: actions.onExpandDirectory
                }}
            />
    }
}

LeftContainer.propTypes = {
    children: PropTypes.element,
    actions: PropTypes.shape({
        onExpandDirectory: PropTypes.func.isRequired,
    }),
    state: PropTypes.shape({
        isExpanded: PropTypes.bool.isRequired,
    }),
}

export default LeftContainer
