import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash'

import '../../css/login/tree.less';

class Tree extends Component {
    constructor(props) {
        super(props);

        // this.realTreeData = null;
        this.state = {
            realTreeData: null
        }

        this.genTreeData = this.genTreeData.bind(this)
        this.renderWholeTreeRecursion = this.renderWholeTreeRecursion.bind(this)
        this.renderLine = this.renderLine.bind(this)
        this.searchNode = this.searchNode.bind(this)
        this.renderSubTree = this.renderSubTree.bind(this)
        this.renderSubTreeRecursion = this.renderSubTreeRecursion.bind(this)
        this.renderTreeRow = this.renderTreeRow.bind(this)
        this.onChangeNodeExpanded = this.onChangeNodeExpanded.bind(this)
    }

    onChangeNodeExpanded(node) {
        node.expanded = !node.expanded
    }

    searchNode(d) {
        if (d.name === this.props.state.selectedFabricItem) {
            console.log(d, this.props.state.selectedFabricItem)
            return d;
        } else if (!_.isEmpty(d.children)) {
            let result = null;

            for (let i = 0; _.isEmpty(result) && i < d.children.length; i++) {
                result = this.searchNode(d.children[i])
            }

            return result;
        }

        return null
    }

    renderTreeRow(node, currentDeepth) {
        return (
            <div key={node._id + '__row'} className="row">
                {
                    this.renderLine(node, currentDeepth)
                }
                {/* <div onClick={() => this.onChangeNodeExpanded(d)} key={d._id + '__node'}>{d.name}</div> */}
                <div className={this.props.state.selectedFabricItem === node.name ? 'active' : ''} onClick={() => this.props.actions.onSelectFabricItem(node.name)} key={node._id + '__node'}>{node.name}</div>
            </div>
        )
    }

    renderWholeTreeRecursion(outputTree, node, currentDeepth) {
        outputTree.push(
            this.renderTreeRow(node, currentDeepth)
        )

        let newCurrentDeepth = currentDeepth + 1;

        if (!_.isEmpty(node.children) && node.expanded) {
            node.children.forEach(child => this.renderWholeTreeRecursion(outputTree, child, newCurrentDeepth))
        } else {
            return null;
        }
    }

    renderSubTree(outputTree, targetNode) {
        let firstNode = targetNode
        let limitDeepth = this.props.state.deepOfChildren + 1

        for (let i = 0; i < this.props.state.deepOfParent; i++) {
            if (!_.isEmpty(firstNode.parent)) {
                firstNode = firstNode.parent
                limitDeepth++
            }
        }

        this.renderSubTreeRecursion(outputTree, firstNode, 0, limitDeepth)
    }

    renderLine(node, currentDeepth) {
        let lines = []

        for (let i = 0; i <= currentDeepth; i++) {
            lines.push(<div key={node._id + '__line' + i}>空格</div>)
        }

        return lines
    }

    renderSubTreeRecursion(outputTree, node, currentDeepth, limitDeepth) {
        outputTree.push(
            this.renderTreeRow(node, currentDeepth)
        )

        let newCurrentDeepth = currentDeepth + 1;

        if (newCurrentDeepth < limitDeepth && !_.isEmpty(node.children) && node.expanded) {
            node.children.forEach(child => this.renderSubTreeRecursion(outputTree, child, newCurrentDeepth, limitDeepth))
        } else {
            return null;
        }
    }

    genTreeData = (d, i) => {
        d.deep = i++;
        d.expanded = true;

        if (!_.isEmpty(d.children)) {
            d.children.forEach(child => {
                child.parent = d;

                this.genTreeData(child, i)
            })
        }
    }

    render() {
        const { state, actions } = this.props;
        let outputTree = []

        if (!_.isEmpty(state.selectedFabricItem) &&
            !_.isEmpty(state.treeData) &&
            state.deepOfParent > 0 &&
            state.deepOfChildren > 0
        ) {
            let targetNode = this.searchNode(state.treeData);

            if (!_.isEmpty(targetNode)) {
                this.renderSubTree(outputTree, targetNode)
            }
        } else if (!_.isEmpty(state.treeData)) {
            this.renderWholeTreeRecursion(outputTree, state.treeData, 0)
        }

        return (
            <div className="tree">
                {
                    outputTree
                }
            </div>
        )
    }
}

export default Tree;
