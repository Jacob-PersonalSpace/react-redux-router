import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import PureComponent from '../PureComponent.jsx'

import './collapsedDirectory.less'

class CollapsedDirectory extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('CollapsedDirectory componentDidMount')
    }

    componentWillMount() {
        console.log('CollapsedDirectory componentWillMount')
    }

    componentWillUnmount() {
        console.log('CollapsedDirectory componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('CollapsedDirectory componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('CollapsedDirectory componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        return (
            <div className="directory-collapsed" onClick={() => actions.onExpandDirectory()} >
                <button className="icon fa fa-angle-double-right" />
            </div>
        )
    }
}

CollapsedDirectory.propTypes = {
    actions: PropTypes.shape({
        onExpandDirectory: PropTypes.func.isRequired,
    }),
}

export default CollapsedDirectory
