import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import Tree from 'react-tree-graph';

import 'react-tree-graph/dist/style.css';
import '../../css/login/D3TreeCustom.less';

class ItemTree extends Component {
    constructor(props) {
        super(props);

        this.nodeOnClick = this.nodeOnClick.bind(this)
    }

    nodeOnClick(nodeKey) {
        this.props.actions.clickTreeNode(nodeKey)
    }

    componentDidMount() {
        this.props.actions.expandTree()
    }

    render() {
        return (
            <div className="custom-container">
                <Tree
                    data={this.props.state.treeData}
                    height={400}
                    width={400}
                    keyProp="_id"
                    animated
                    nodeClickHandler={this.nodeOnClick}
                    treeClassName="custom"
                />
            </div>
        );
    }
}

export default ItemTree;