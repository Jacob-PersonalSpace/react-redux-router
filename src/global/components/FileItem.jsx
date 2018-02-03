import React, { Component } from 'react'
import { render } from 'react-dom'
import { isUndefined } from 'lodash'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import PureComponent from './PureComponent.jsx'

import '../css/item.less'
import 'font-awesome/css/font-awesome.min.css'

class FileItem extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('FileItem componentDidMount')
    }

    componentWillMount() {
        console.log('FileItem componentWillMount')
    }

    componentWillUnmount() {
        console.log('FileItem componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('FileItem componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('FileItem componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { item } = state

        console.debug('FileItem component state: ', state.toJS())

        const itemPaddingLeft = 20 + item.get('deepth') * 15 + 'px'

        return (
            <div
                key={item.get('_id')}
                className={classnames("list-item", "list-file")}
                style={{ paddingLeft: itemPaddingLeft }}
                onClick={() => actions.onClickItem(item.get('_id'))}
            >
                <i className={"icon fa fa-file"} />
                <span>{item.get('name') + !isUndefined(item.get('count')) ? '(' + item.get('count') + ')' : ''}</span>
            </div>
        )
    }
}

FileItem.propTypes = {
    item: ImmutablePropTypes.contains({
        name: PropTypes.string.isRequired,
        deepth: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
}

export default FileItem
