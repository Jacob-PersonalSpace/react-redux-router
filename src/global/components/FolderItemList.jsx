import React, { Component } from 'react'
import { render } from 'react-dom'
import { isEmpty, isArray } from 'lodash'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'

import PureComponent from './PureComponent.jsx'
import FolderItem from './FolderItem.jsx'

class FolderItemList extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('FolderItemList componentDidMount')
    }

    componentWillMount() {
        console.log('FolderItemList componentWillMount')
    }

    componentWillUnmount() {
        console.log('FolderItemList componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('FolderItemList componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('FolderItemList componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { items } = state

        console.debug('FolderItemList component state: ', state.toJS())

        return isEmpty(items) && isArray(items) ?
            items.map((item) => {
                <FolderItem
                    state={{
                        item,
                    }}
                    actions={{
                        onClickItem: actions.onClickItem,
                    }}
                />
            }) :
            null
    }
}

FolderItemList.propTypes = {
    items: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
        name: PropTypes.string.isRequired,
        deepth: PropTypes.number.isRequired,
    })).isRequired,
}

export default FolderItemList
