import React, { Component } from 'react';
import { render } from 'react-dom';
import SortableTree from 'react-sortable-tree';
import $ from 'jquery';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.onChangeTreeData = this.onChangeTreeData.bind(this)
    }

    componentDidMount() {
        $(document).on("click", ".rst__row", function (node) {
            //你的事件处理过程
            $(this).focus()
            console.log('?????????????????', node)
        });
    }

    onChangeTreeData(treeData) {
        console.debug('new tree data', JSON.stringify(treeData, null, 2))
        this.props.actions.onChangeTreeData(treeData)
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
                    <button onClick={() => actions.loginIn()}>Login In</button>
                    <button onClick={() => actions.dumpToRegist()}>Regist</button>
                </div>
                <div style={{ height: 400, width: 500 }}>
                    <SortableTree
                        treeData={state.treeData}
                        onChange={treeData => this.onChangeTreeData(treeData)}
                        canDrag={false}
                        generateNodeProps={({ node, path }) => ({
                            buttons: [
                                <button>HL</button>,
                                <button>TW</button>,
                                <button>FCR</button>,
                            ],
                        })}
                    />
                </div>
            </div>
        )
    }
}

export default LoginContainer;
