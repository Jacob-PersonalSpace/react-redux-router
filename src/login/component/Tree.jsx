import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash'

// import '../../css/login/tree.less';

class Tree extends Component {
    constructor(props) {
        super(props);

        this.genTreeData = this.genTreeData.bind(this)
        this.renderWholeTreeRecursion = this.renderWholeTreeRecursion.bind(this)
        this.renderLine = this.renderLine.bind(this)
        this.renderNode = this.renderNode.bind(this)
        this.searchNode = this.searchNode.bind(this)
        this.renderSubTree = this.renderSubTree.bind(this)
        this.renderSubTreeRecursion = this.renderSubTreeRecursion.bind(this)
        this.renderTreeRow = this.renderTreeRow.bind(this)
        this.onChangeNodeExpanded = this.onChangeNodeExpanded.bind(this)
    }

    onChangeNodeExpanded(node) {
        this.props.actions.expandOrCollapseNode(node.name)
    }

    searchNode(d) {
        if (d.name === this.props.state.selectedFabricItem) {
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

    renderLine(node, currentDeepth) {
        let lines = []

        for (let i = 0; i <= currentDeepth; i++) {
            let classNames = ['lineBlock']

            if (currentDeepth === i) {
                classNames.push('lineHalfHorizontalRight')

                if (!_.isEmpty(node.parent)) {
                    let targetNodeIndex = node.parent.children.findIndex(v => v.name === node.name)

                    if (targetNodeIndex === (node.parent.children.length - 1)) {
                        if (this.props.state.deepOfParent > 0 && i === 0) {

                        } else {
                            classNames.push('lineHalfVerticalTop')
                        }
                    } else {
                        if (this.props.state.deepOfParent > 0 && i === 0) {

                        } else {
                            classNames.push('lineFullVertical')
                        }
                    }
                }
            } else {
                // node的第 currentDeepth - i + 1 个parent有兄弟，并且这个parent不是排最后，则加lineFullVertical
                let parent = node;

                for (let j = 0; j < (currentDeepth - i); j++) {
                    parent = parent.parent;
                }

                if (!_.isEmpty(parent) && !_.isEmpty(parent.parent)) {
                    let targetNodeIndex = parent.parent.children.findIndex(v => v.name === parent.name)

                    if (targetNodeIndex !== (parent.parent.children.length - 1)) {
                        if (this.props.state.deepOfParent > 0 && i === 0) {

                        } else {
                            classNames.push('lineFullVertical')
                        }
                    }
                }
            }

            lines.push(<div key={node._id + '__line' + i} className={classNames.join(' ')} style={{ width: '44px' }}></div>)
        }

        return lines
    }

    renderNode(node, currentDeepth) {
        let classNames = ['rowWrapper']
        let nodeClassNames = ['rowContents']
        let space = 44 * (currentDeepth + 1)

        if (this.props.state.selectedFabricItem === node.name) {
            classNames.push('active')
            nodeClassNames.push('nodeHighLight')
        }

        let temp = node.expanded ? '-' : '+'

        return (
            <div className="nodeContent" style={{ left: space + 'px' }}>
                <div style={{ height: '100%' }}>
                    <div>
                        {
                            !_.isEmpty(node.children) ?
                                <button className="button" style={{ left: '-22px' }} type="button" onClick={() => this.onChangeNodeExpanded(node)}>{temp}</button> :
                                null
                        }
                        {
                            !_.isEmpty(node.children) && node.expanded ?
                                <div className="lineChildren" style={{ width: '44px' }}></div> :
                                null
                        }
                    </div>
                    <div
                        className={classNames.join(' ')}
                        onClick={() => this.props.actions.onSelectFabricItem(node.name)}
                        key={node._id + '__node'}
                    >
                        <div className="row" style={{ opacity: '1' }}>
                            <div className={nodeClassNames.join(' ')}>
                                <div className="rowLabel">
                                    <span className="rowTitle">
                                        {
                                            node.name
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        {
                            this.props.state.selectedFabricItem === node.name ?
                                <div>
                                    <button className="bb" onClick={() => { alert('build FCR') }}>FCR</button>
                                    <button className="bb" onClick={() => { alert('build TW') }}>TW</button>
                                    <button className="bb" onClick={() => { alert('build HL') }}>HL</button>
                                </div> :
                                null
                        }
                    </div>
                </div>
            </div>
        )
    }

    renderTreeRow(node, currentDeepth) {
        return (
            <div key={node._id + '__row'} className="node" style={{ height: '62px', left: '0px', top: '0px', width: '100%' }}>
                {
                    this.renderLine(node, currentDeepth)
                }
                {

                    this.renderNode(node, currentDeepth)
                }
                {/* <div onClick={() => this.onChangeNodeExpanded(d)} key={d._id + '__node'}>{d.name}</div> */}

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
            <div style={{ overflow: 'visible', height: '0px', width: '0px' }}>
                {
                    outputTree
                }
            </div>
        )
    }
}

export default Tree;
