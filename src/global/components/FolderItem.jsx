import React, { Component } from 'react'
import { render } from 'react-dom'
import { isEmpty } from 'lodash'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import PureComponent from './PureComponent.jsx'

import '../css/item.less'
import 'font-awesome/css/font-awesome.min.css'

class FolderItem extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('FolderItem componentDidMount')
    }

    componentWillMount() {
        console.log('FolderItem componentWillMount')
    }

    componentWillUnmount() {
        console.log('FolderItem componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('FolderItem componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('FolderItem componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { item } = state

        console.debug('FolderItem component state: ', state.toJS())

        const itemPaddingLeft = 20 + item.get('deepth') * 15 + 'px'

        return (
            <div
                key={item.get('name')}
                className={classnames("list-item", "list-folder")}
                style={{ paddingLeft: itemPaddingLeft }}
                onClick={() => actions.onClickItem(item.get('name'))}
            >
                <i className={state.get('isExpanded') ? "fa fa-folder-open" : "fa fa-folder"} />
                <span>{item.get('name')}</span>
            </div>
        )
    }
}

FolderItem.propTypes = {
    item: ImmutablePropTypes.contains({
        name: PropTypes.string.isRequired,
        deepth: PropTypes.number.isRequired,
        isExpanded: PropTypes.bool.isRequired,
    }).isRequired,
}

export default FolderItem
