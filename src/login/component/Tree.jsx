import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash'

import '../../css/login/tree.less';

class Tree extends Component {
    constructor(props) {
        super(props);

        this.renderTree = this.renderTree.bind(this)
        this.renderLine = this.renderLine.bind(this)
    }

    renderLine(d) {
        let lines = []

        for (let i = 0; i < d.deep; i++) {
            lines.push(<div key={d._id + '__line' + i}>空格</div>)
        }

        return lines
    }

    renderTree(leaves, d) {
        leaves.push(
            <div key={d._id + '__row'} className="row">
                {
                    this.renderLine(d)
                }
                <div onClick={() => this.props.actions.onChangeNodeExpanded(d.name)} key={d._id + '__node'}>{d.name}</div>
            </div>
        )

        return !_.isEmpty(d.children) && d.expanded ?
            d.children.forEach(c => this.renderTree(leaves, c)) :
            false;
    }

    render() {
        const { state, actions } = this.props;
        let nodes = []

        this.renderTree(nodes, state.treeData)

        return (
            <div className="tree">
                {
                    nodes
                }
            </div>
        )
    }
}

export default Tree;
