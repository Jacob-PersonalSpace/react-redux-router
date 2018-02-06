import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { List, fromJS } from 'immutable'
import HotTable from 'react-handsontable'
import Handsontable from 'handsontable'
import { trim } from 'lodash'
import ReduxBlockUi from 'react-block-ui/redux'
import { Loader, Types } from 'react-loaders'
import 'react-block-ui/style.css'
import 'loaders.css/loaders.min.css'

import 'handsontable/dist/handsontable.full.css'

import bindFunctions from '../../util/bind-functions'
import { getLabelByValue, changeStringToBoolean } from '../../util/helper'
import { JOASSIGN_MASTER_COLUMNS, JOASSIGN_BREADCRUMB } from '../../constants/index'
import {
    JOASSIGN_FAILURE_FILE,
    JOASSIGN_RECEIVE_FILE,
    JOASSIGN_REQUEST_FILE,
} from '../../actionTypes/index'

import LeftContainer from '../../global/components/LeftContainer.jsx'
import ExpandedDirectory from '../../global/components/ExpandedDirectory.jsx'
import Item from '../../global/components/Item.jsx'
import RightContainer from '../../global/components/RightContainer.jsx'
import PureComponent from '../../global/components/PureComponent.jsx'
import SheetSelector from '../../global/components/SheetSelector.jsx'

import '../css/joAssign.less'

class JoAssign extends PureComponent {
    constructor(props) {
        super(props)

        bindFunctions.call(this, [
            'renderItemList',
            'renderRequestTable',
            'beforeChange',
            'renderTableCells',
        ])

        Handsontable.renderers.registerRenderer('renderTableCells', this.renderTableCells)
    }

    renderTableCells(instance, td, row, col, prop, value, cellProperties) {
        let content = this.props.state.joAssign.getIn(['rightContainerState', 'fileContent', 'content', 0])
        col = instance.toPhysicalColumn(col)
        row = instance.toPhysicalRow(row)

        if (content.get('body')) {
            let type = content.getIn(['header', 'columns', col, 'type'])

            if (type === 'checkbox') {
                Handsontable.renderers.CheckboxRenderer.apply(this, arguments)
            } else if (type === 'date') {
                Handsontable.renderers.DateRenderer.apply(this, arguments)
            } else if (type === 'text') {
                Handsontable.renderers.TextRenderer.apply(this, arguments)

                // begin transfer value to label
                let columnName = content.getIn(['header', 'colHeaders', col])

                let masterColumn = JOASSIGN_MASTER_COLUMNS.find(v => v.columnName === trim(columnName))
                let stateName = masterColumn ? masterColumn.stateName : ''

                if (stateName && value) {
                    td.innerHTML = getLabelByValue(this.props.state.masterDataState.get('finishingList'), value, '+', ', ')
                }
                // end transfer value to label
            }
        }
    }

    beforeChange(changes, source) {
        let rows = fromJS([])

        let content = this.props.state.joAssign.getIn(['rightContainerState', 'fileContent', 'content', 0])

        changes.forEach(change => {
            let row = fromJS({})

            let changedValue = change[3],
                physicalRowIndex = this.refs.hot.hotInstance.toPhysicalRow(change[0])

            let physicalColumnIndex = this.refs.hot.hotInstance.toPhysicalColumn(content.getIn(['header', 'columns']).findIndex(obj => obj.get('data') === change[1]))
            let columnId = content.getIn(['header', 'columns', physicalColumnIndex, 'data']).split('.')[0]

            changedValue = changeStringToBoolean(changedValue, physicalColumnIndex)

            row = row.merge(fromJS({
                _id: content.getIn(['body', physicalRowIndex, '_id']),
                [columnId]: {
                    value: changedValue,
                }
            }))

            rows = rows.push(row)
        })

        this.props.actions.changeCells(rows)
    }

    renderItemList() {
        let returnElements = []

        this.props.state.joAssign.getIn(['leftContainerState', 'requestList']).forEach((node, index) => {
            returnElements.push(<Item
                key={'folder-' + node.get('name')}
                state={{
                    name: node.get('name'),
                    deepth: node.get('deepth'),
                    style: ['list-folder'],
                    icon: node.get('isExpanded') ? ['icon fa fa-folder-open'] : ['icon fa fa-folder'],
                }}
                actions={{
                    onClickItem: this.props.actions.onClickFolder,
                }}
            />)

            if (node.get('isExpanded') && List.isList(node.get('child')) && !node.get('child').isEmpty()) {
                returnElements.push(...node.get('child').map(child => <Item
                    key={'file-' + child.get('name')}
                    state={{
                        name: child.get('name'),
                        deepth: child.get('deepth'),
                        style: ['list-file'],
                        icon: ['icon fa fa-file'],
                        count: child.get('count'),
                        _id: child.get('_id'),
                    }}
                    actions={{
                        onClickItem: this.props.actions.onOpenHandloomRequest,
                    }}
                />))
            }
        })

        return returnElements
    }

    renderRequestTable() {
        if (this.props.state.joAssign.getIn(['rightContainerState', 'fileContent']).size > 0) {
            let fileContent = this.props.state.joAssign.getIn(['rightContainerState', 'fileContent']).toJS()

            return <HotTable
                key={fileContent._id}
                root="hot"
                ref="hot"
                settings={{
                    data: fileContent.content[0].body,
                    colHeaders: fileContent.content[0].header.colHeaders,
                    columns: fileContent.content[0].header.columns,
                    rowHeaders: true,
                    dropdownMenu: ['clear_column', "---------", 'filter_by_condition', 'filter_by_value', 'filter_action_bar'],
                    filters: true,
                    beforeChange: (changes, source) => {
                        this.beforeChange(changes, source)

                        return false
                    },
                    cells: (row, col, prop) => {
                        let cellProperties = {}
                        cellProperties.renderer = "renderTableCells"

                        return cellProperties
                    },
                }}
            />
        } else {
            return null
        }
    }

    componentDidMount() {
        console.log('JoAssign componentDidMount')
    }

    componentWillMount() {
        this.props.actions.onFetchHandloomRequestList()
        this.props.actions.updateBreadcrumb(JOASSIGN_BREADCRUMB)
        console.log('JoAssign componentWillMount')
    }

    componentWillUnmount() {
        console.log('JoAssign componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('JoAssign componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('JoAssign componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { joAssign } = state
        const isExpanded = joAssign.getIn(['leftContainerState', 'isExpanded'])

        return (
            <div className="joassign">
                <SheetSelector
                    state={{
                        sheets: joAssign.getIn(['sheetSelectorState', 'sheets']),
                        selectedSheet: joAssign.getIn(['sheetSelectorState', 'selectedSheet']),
                    }}
                    actions={{
                        onChangeSheet: actions.onChangeSheet,
                    }}
                />

                <LeftContainer
                    state={{ isExpanded }}
                    actions={{
                        onExpandDirectory: actions.onExpandDirectory,
                    }}
                >
                    {
                        <ExpandedDirectory
                            actions={{
                                onCollapseDirectory: actions.onCollapseDirectory,
                            }}
                            state={{
                                title: 'Handloom Request',
                            }}
                        >
                            {
                                this.renderItemList()
                            }
                        </ExpandedDirectory>
                    }
                </LeftContainer>

                <RightContainer
                    style={{
                        height: 'calc(100% - 214px)',
                        width: isExpanded ? 'calc(100% - 262px)' : 'calc(100% - 52px)',
                        left: isExpanded ? '262px' : '52px',
                    }}
                >
                    {
                        <ReduxBlockUi className="block-ui-hidden" tag="div" block={JOASSIGN_REQUEST_FILE} unblock={[JOASSIGN_RECEIVE_FILE, JOASSIGN_FAILURE_FILE]} loader={<Loader active={true} type="ball-spin-fade-loader" color="#02a17c" />}>
                            <div style={{ width: '100%', height: '100%' }}>
                                {
                                    this.renderRequestTable()
                                }
                            </div>
                        </ReduxBlockUi>
                    }
                </RightContainer>
            </div>
        )
    }
}

JoAssign.propTypes = {
    actions: PropTypes.shape({
        onFetchHandloomRequestList: PropTypes.func.isRequired,
        onExpandDirectory: PropTypes.func.isRequired,
        onCollapseDirectory: PropTypes.func.isRequired,
        onClickFolder: PropTypes.func.isRequired,
        onOpenHandloomRequest: PropTypes.func.isRequired,
        onChangeSheet: PropTypes.func.isRequired,
        changeCells: PropTypes.func.isRequired,
    }),
    state: PropTypes.shape({
        joAssign: ImmutablePropTypes.contains({
            leftContainerState: ImmutablePropTypes.contains({
                requestList: ImmutablePropTypes.list.isRequired,
                isExpanded: PropTypes.bool.isRequired,
                isFetchingRequestList: PropTypes.bool.isRequired,
            }),
            rightContainerState: ImmutablePropTypes.contains({
                fileContent: ImmutablePropTypes.map.isRequired,
                isFetchingRequestFile: PropTypes.bool.isRequired,
            }),
            sheetSelectorState: ImmutablePropTypes.contains({
                sheets: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                    text: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired,
                })).isRequired,
                selectedSheet: PropTypes.string.isRequired,
            }),
        }).isRequired,
        masterDataState: ImmutablePropTypes.contains({
            finishingList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })).isRequired,
        }),
    })
}

export default JoAssign
