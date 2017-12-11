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

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                {/* <span>user name</span>
                <input type="text" value={state.userName} onChange={evt => actions.inputUserName(evt.target.value)} />
                <span>password</span>
                <input type="password" value={state.passWord} onChange={evt => actions.inputPassword(evt.target.value)} />
                <button>Login In</button>
                <button onClick={() => this.props.history.push('/regist')}>Regist</button>
                <button onClick={() => actions.loginIn()}>Login In</button> */}

                {/* <div className="tree">
                    <div style={{ overflow: 'visible', height: '0px', width: '0px' }}>
                        <div className="node" style={{ height: '62px', left: '0px', position: 'absolute', top: '0px', width: '100%' }}>
                            <div className="lineBlock lineHalfHorizontalRight" style={{ width: '44px' }}></div>
                            <div className="nodeContent" style={{ left: '44px' }}>
                                <div style={{ height: '100%' }}>
                                    <div className="rowWrapper">
                                        <div className="row" style={{ opacity: '1' }}>
                                            <div className="rowContents">
                                                <div className="rowLabel">
                                                    <span className="rowTitle">
                                                        Fabric Item 1
                                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
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
                                        deepOfChildren: 1,
                                        deepOfParent: 1,
                                    }}
                                    actions={{
                                        onSelectFabricItem: actions.onSelectFabricItem,
                                        onChangeNodeExpanded: actions.onChangeNodeExpanded,
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
