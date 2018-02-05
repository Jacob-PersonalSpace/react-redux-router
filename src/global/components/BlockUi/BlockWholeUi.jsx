import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import classnames from 'classnames'
import Loader from 'react-loaders'

import PureComponent from '../PureComponent.jsx'

import './blockWholeUi.less'
import './reactLoaders.scss'

class BlockWholeUi extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('BlockWholeUi componentDidMount')
    }

    componentWillMount() {
        console.log('BlockWholeUi componentWillMount')
    }

    componentWillUnmount() {
        console.log('BlockWholeUi componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('BlockWholeUi componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('BlockWholeUi componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { ifShow } = state

        return (
            <div
                className={classnames("block-whole-ui", { "active": ifShow })}
            >
                <div className="overlay">
                    <Loader type="ball-spin-fade-loader" />
                </div>
            </div>
        )
    }
}

BlockWholeUi.propTypes = {
    state: PropTypes.shape({
        ifShow: PropTypes.bool.isRequired,
    }),
}

export default BlockWholeUi
