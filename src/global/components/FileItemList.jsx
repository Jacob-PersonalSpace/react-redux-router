import React, { Component } from 'react'
import { render } from 'react-dom'
import { isEmpty, isArray } from 'lodash'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'

import PureComponent from './PureComponent.jsx'
import FileItem from './FileItem.jsx'

class FileItemList extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('FileItemList componentDidMount')
    }

    componentWillMount() {
        console.log('FileItemList componentWillMount')
    }

    componentWillUnmount() {
        console.log('FileItemList componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('FileItemList componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('FileItemList componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { items } = state

        console.debug('FileItemList component state: ', state.toJS())

        return isEmpty(items) && isArray(items) ?
            items.map((item) => {
                <FileItem
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

FileItemList.propTypes = {
    items: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
        name: PropTypes.string.isRequired,
        deepth: PropTypes.number.isRequired,
    })).isRequired,
}

export default FileItemList
