import React, { Component } from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router'
import _ from 'lodash'

import Tree from './Tree.jsx'
import FabricItemList from './FabricItemList.jsx'

import '../../css/login/body.less'
// import '../../css/login/csstest.less'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getTreeData()
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <button onClick={() => actions.expandAll()}>expand all</button>
                <button onClick={() => actions.collapseAll()}>collapse all</button>
                <div className="body">
                    <div className="fabricItemList">
                        {
                            !_.isEmpty(state.fabricItemList) ?
                                <FabricItemList
                                    state={{
                                        selectedFabricItem: state.selectedFabricItem,
                                        fabricItemList: state.fabricItemList,
                                    }}
                                    actions={{
                                        onSelectFabricItem: actions.onSelectFabricItem,
                                    }}
                                /> :
                                false
                        }
                    </div>
                    <div className="tree">
                        {
                            !_.isEmpty(state.treeData) ?
                                <Tree
                                    state={{
                                        selectedFabricItem: state.selectedFabricItem,
                                        treeData: state.treeData,
                                        deepOfChildren: 3,
                                        deepOfParent: 1,
                                    }}
                                    actions={{
                                        onSelectFabricItem: actions.onSelectFabricItem,
                                        onChangeNodeExpanded: actions.onChangeNodeExpanded,
                                        expandOrCollapseNode: actions.expandOrCollapseNode,
                                    }}
                                /> :
                                false
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(LoginContainer);
