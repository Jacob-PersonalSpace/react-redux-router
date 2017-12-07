import React, { Component } from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router'
import _ from 'lodash'

import Tree from './Tree.jsx'
import FabricItemList from './FabricItemList.jsx'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <span>user name</span>
                <input type="text" value={state.userName} onChange={evt => actions.inputUserName(evt.target.value)} />
                <span>password</span>
                <input type="password" value={state.passWord} onChange={evt => actions.inputPassword(evt.target.value)} />
                <button>Login In</button>
                <button onClick={() => this.props.history.push('/regist')}>Regist</button>
                <button onClick={() => actions.loginIn()}>Login In</button>
                <div style={{ display: 'inline-block' }}>
                    <div>
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
                    <div>
                        {
                            !_.isEmpty(state.treeData) ?
                                <Tree
                                    state={{
                                        selectedFabricItem: state.selectedFabricItem,
                                        treeData: state.treeData,
                                    }}
                                    actions={{
                                        onChangeNodeExpanded: actions.onChangeNodeExpanded,
                                    }}
                                /> :
                                false
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginContainer);
