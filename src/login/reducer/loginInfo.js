import _ from 'lodash'

import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    CLICK_TREE_NODE,
    COLLAPSE_TREE,
    EXPAND_TREE,
} from '../../actionTypes'

export const userName = (state = '', action) => {
    switch (action.type) {
        case INPUT_USERNAME:
            return action.payload;
            break;

        default:
            return state;
    }
}

export const passWord = (state = '', action) => {
    switch (action.type) {
        case INPUT_PASSWORD:
            return action.payload;
            break;

        default:
            return state;
    }
}

const initTreeDataSource = {
    _id: 1,
    name: 'Parent',
    children: [
        {
            _id: 2,
            name: 'Child One',
            children: [
                {
                    _id: 4,
                    name: 'Child Child One',
                },
                {
                    _id: 5,
                    name: 'Child Child Two',
                },
            ],
        },
        {
            _id: 3,
            name: 'Child Two',
            children: null,
            _children: [
                {
                    _id: 6,
                    name: 'Child Child Three',
                },
                {
                    _id: 7,
                    name: 'Child Child Four',
                },
            ],
        },
    ]
}

const collapse = (d) => {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
        d.className = 'red-node';
    }
}

const collapseNode = (d, keyNode) => {
    if (d._id === keyNode) {
        if (d.children) {
            collapse(d)
        } else if (d._children) {
            expand(d)
        }

        return true;
    }

    if (d.children) {
        d.children.some(c => collapseNode(c, keyNode))
    } else if (d._children) {
        d._children.some(c => collapseNode(c, keyNode))
    }
}

const expand = (d) => {
    if (d._children) {
        d.children = d._children;
        d.children.forEach(expand);
        d._children = null;
        delete d['className']
    }
}

export const treeDataSource = (state = initTreeDataSource, action) => {
    let newState

    switch (action.type) {
        case CLICK_TREE_NODE:
            newState = _.cloneDeep(state)

            collapseNode(newState, action.payload)

            return newState;
            break;

        case COLLAPSE_TREE:
            newState = _.cloneDeep(state)

            newState.children.forEach(collapse);

            return newState;
            break;

        case EXPAND_TREE:
            newState = _.cloneDeep(state)

            newState.children.forEach(expand);

            return newState;
            break;

        default:
            return state;
    }
}
