import React, { Component } from 'react';
import { render } from 'react-dom';

import ItemTree from './ItemTree.jsx'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <div>
                    <span>user name</span>
                    <input type="text" value={state.userName} onChange={evt => actions.inputUserName(evt.target.value)} />
                    <span>password</span>
                    <input type="password" value={state.passWord} onChange={evt => actions.inputPassword(evt.target.value)} />
                    <button>Login In</button>
                    <button onClick={() => actions.dumpToRegist()}>Regist</button>
                </div>
                <div>
                    <ItemTree
                        state={{
                            treeData: state.treeDataSource,
                        }}
                        actions={{
                            clickTreeNode: actions.clickTreeNode,
                            expandTree: actions.expandTree,
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default LoginContainer;
