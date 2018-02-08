import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import PureComponent from '../PureComponent.jsx'

import './sheetSelector.less'

class SheetSelector extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('SheetSelector componentDidMount')
    }

    componentWillMount() {
        console.log('SheetSelector componentWillMount')
    }

    componentWillUnmount() {
        console.log('SheetSelector componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('SheetSelector componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('SheetSelector componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { sheets, selectedSheet } = state

        return (
            <div className={'sheet-selector'}>
                {
                    sheets.map(sheet => {
                        return (
                            <button onClick={() => actions.onChangeSheet(sheet.get('value'))}
                                key={sheet.get('value')}
                                className={selectedSheet.toUpperCase() === sheet.get('value').toUpperCase() ? 'active' : ''}
                            >
                                {sheet.get('text')}
                            </button>
                        )
                    })
                }
            </div>
        )
    }
}

SheetSelector.propTypes = {
    state: PropTypes.shape({
        sheets: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
            text: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })).isRequired,
        selectedSheet: PropTypes.string.isRequired,
    }),
    actions: PropTypes.shape({
        onChangeSheet: PropTypes.func.isRequired,
    }),
}

export default SheetSelector
