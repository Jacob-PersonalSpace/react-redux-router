import React, { Component } from 'react'
import { render } from 'react-dom'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'

import PureComponent from '../PureComponent.jsx'

import './expandedDirectory.less'

class ExpandedDirectory extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('ExpandedDirectory componentDidMount')
    }

    componentWillMount() {
        console.log('ExpandedDirectory componentWillMount')
    }

    componentWillUnmount() {
        console.log('ExpandedDirectory componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('ExpandedDirectory componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('ExpandedDirectory componentDidUpdate')
    }

    render() {
        const { state, actions, children } = this.props
        const { title } = state

        return (
            <div className="directory-expanded">
                <div className="title">
                    <span>{title}</span>
                    <button className="icon fa fa-angle-double-left"
                        onClick={() => actions.onCollapseDirectory()}
                    />
                </div>
                <div className="container">
                    <div className="list-container">
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        )
    }
}

ExpandedDirectory.propTypes = {
    children: PropTypes.any,
    actions: PropTypes.shape({
        onCollapseDirectory: PropTypes.func.isRequired,
    }),
    state: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
}

export default ExpandedDirectory
