import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash'

class Tree extends Component {
    constructor(props) {
        super(props);

        this.renderTree = this.renderTree.bind(this)
        this.renderLine = this.renderLine.bind(this)
    }

    renderLine(d) {
        let lines = []

        for (let i = 0; i < d.deep; i++) {
            lines.push(<span key={d._id + '__line' + i}>空格</span>)
        }

        return lines
    }

    renderTree(leaves, d) {
        leaves.push(
            <div key={d._id + '__row'}>
                {
                    this.renderLine(d)
                }
                <span key={d._id + '__item'}>{d.name}</span>
            </div>
        )

        return !_.isEmpty(d.children) && d.expand ?
            d.children.forEach(c => this.renderTree(leaves, c)) :
            false;
    }

    render() {
        const { state, actions } = this.props;
        let leaves = []

        this.renderTree(leaves, state.treeData)

        return leaves
    }
}

export default Tree;
