import React, { Component } from 'react'
import { render } from 'react-dom'
import { isUndefined } from 'lodash'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import PureComponent from './PureComponent.jsx'

import '../css/item.less'
import 'font-awesome/css/font-awesome.min.css'

class Item extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.debug('Item componentDidMount')
    }

    componentWillMount() {
        console.debug('Item componentWillMount')
    }

    componentWillUnmount() {
        console.debug('Item componentWillUnmount')
    }

    componentWillUpdate() {
        console.debug('Item componentWillUpdate')
    }

    componentDidUpdate() {
        console.debug('Item componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { name, count, icon, style, deepth, _id } = state

        console.log('Item component state', state)

        const itemPaddingLeft = 20 + deepth * 15 + 'px'
        const stringCount = !isUndefined(count) ? ('(' + count + ')') : ''

        return (
            <div
                key={'Item-' + name}
                className={classnames("list-item", style)}
                style={{ paddingLeft: itemPaddingLeft }}
                onClick={() => actions.onClickItem(name, _id)}
            >
                <i className={classnames(icon)} />
                <span>{name + stringCount}</span>
            </div>
        )
    }
}

Item.propTypes = {
    state: PropTypes.shape({
        name: PropTypes.string.isRequired,
        deepth: PropTypes.number.isRequired,
        _id: PropTypes.string,
        icon: PropTypes.array,
        count: PropTypes.number,
        style: PropTypes.array,
    }).isRequired,
}

export default Item
