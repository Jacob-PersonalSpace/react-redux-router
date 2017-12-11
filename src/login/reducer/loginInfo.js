import _ from 'lodash';
import Immutable, { fromJS } from 'immutable';

import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    SUCCESS_LOGIN,
    EXPAND_NODE,
    COLLAPSE_NODE,
    EXPAND_ALL,
    COLLAPSE_ALL,
    SELECT_FABRICITEM,
    RECEIVE_TREEDATA,
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

let initTreeData = {
    _id: 1,
    name: 'item 1',
    children: [
        {
            _id: 2,
            name: 'item 1-1',
            children: [
                {
                    _id: 3,
                    name: 'item 1-1-1',
                    children: [
                        {
                            _id: 4,
                            name: 'item 1-1-1-1',
                            children: [
                                {
                                    _id: 5,
                                    name: 'item 1-1-1-1-1',
                                    children: [
                                        {
                                            _id: 6,
                                            name: 'item 1-1-1-1-1-1',
                                        },
                                        {
                                            _id: 7,
                                            name: 'item 1-1-1-1-1-2',
                                        },
                                    ],
                                },
                                {
                                    _id: 8,
                                    name: 'item 1-1-1-1-2',
                                    children: [
                                        {
                                            _id: 9,
                                            name: 'item 1-1-1-1-2-1',
                                        },
                                        {
                                            _id: 10,
                                            name: 'item 1-1-1-1-2-2',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            _id: 11,
                            name: 'item 1-1-1-2',
                            children: [
                                {
                                    _id: 12,
                                    name: 'item 1-1-1-2-1',
                                    children: [
                                        {
                                            _id: 13,
                                            name: 'item 1-1-1-2-1-1',
                                        },
                                        {
                                            _id: 14,
                                            name: 'item 1-1-1-2-1-2',
                                        },
                                    ],
                                },
                                {
                                    _id: 15,
                                    name: 'item 1-1-1-2-2',
                                    children: [
                                        {
                                            _id: 16,
                                            name: 'item 1-1-1-2-2-1',
                                        },
                                        {
                                            _id: 17,
                                            name: 'item 1-1-1-2-2-2',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    _id: 18,
                    name: 'item 1-1-2',
                    children: [
                        {
                            _id: 19,
                            name: 'item 1-1-2-1',
                            children: [
                                {
                                    _id: 20,
                                    name: 'item 1-1-2-1-1',
                                    children: [
                                        {
                                            _id: 21,
                                            name: 'item 1-1-2-1-1-1',
                                        },
                                        {
                                            _id: 22,
                                            name: 'item 1-1-2-1-1-2',
                                        },
                                    ],
                                },
                                {
                                    _id: 23,
                                    name: 'item 1-1-2-1-2',
                                    children: [
                                        {
                                            _id: 24,
                                            name: 'item 1-1-2-1-2-1',
                                        },
                                        {
                                            _id: 25,
                                            name: 'item 1-1-2-1-2-2',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            _id: 26,
                            name: 'item 1-1-2-2',
                            children: [
                                {
                                    _id: 27,
                                    name: 'item 1-1-2-2-1',
                                    children: [
                                        {
                                            _id: 28,
                                            name: 'item 1-1-2-2-1-1',
                                        },
                                        {
                                            _id: 29,
                                            name: 'item 1-1-2-2-1-2',
                                        },
                                    ],
                                },
                                {
                                    _id: 30,
                                    name: 'item 1-1-2-2-2',
                                    children: [
                                        {
                                            _id: 31,
                                            name: 'item 1-1-2-2-2-1',
                                        },
                                        {
                                            _id: 32,
                                            name: 'item 1-1-2-2-2-2',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            _id: 33,
            name: 'item 1-2',
            children: [
                {
                    _id: 34,
                    name: 'item 1-2-1',
                    children: [
                        {
                            _id: 35,
                            name: 'item 1-2-1-1',
                            children: [
                                {
                                    _id: 36,
                                    name: 'item 1-2-1-1-1',
                                    children: [
                                        {
                                            _id: 37,
                                            name: 'item 1-2-1-1-1-1',
                                        },
                                        {
                                            _id: 38,
                                            name: 'item 1-2-1-1-1-2',
                                        },
                                    ],
                                },
                                {
                                    _id: 39,
                                    name: 'item 1-2-1-1-2',
                                    children: [
                                        {
                                            _id: 40,
                                            name: 'item 1-2-1-1-2-1',
                                        },
                                        {
                                            _id: 41,
                                            name: 'item 1-2-1-1-2-2',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            _id: 42,
                            name: 'item 1-2-1-2',
                            children: [
                                {
                                    _id: 43,
                                    name: 'item 1-2-1-2-1',
                                    children: [
                                        {
                                            _id: 44,
                                            name: 'item 1-2-1-2-1-1',
                                        },
                                        {
                                            _id: 45,
                                            name: 'item 1-2-1-2-1-2',
                                        },
                                    ],
                                },
                                {
                                    _id: 46,
                                    name: 'item 1-2-1-2-2',
                                    children: [
                                        {
                                            _id: 47,
                                            name: 'item 1-2-1-2-2-1',
                                        },
                                        {
                                            _id: 48,
                                            name: 'item 1-2-1-2-2-2',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    _id: 49,
                    name: 'item 1-2-2',
                    children: [
                        {
                            _id: 50,
                            name: 'item 1-2-2-1',
                            children: [
                                {
                                    _id: 51,
                                    name: 'item 1-2-2-1-1',
                                    children: [
                                        {
                                            _id: 52,
                                            name: 'item 1-2-2-1-1-1',
                                        },
                                        {
                                            _id: 53,
                                            name: 'item 1-2-2-1-1-2',
                                        },
                                    ],
                                },
                                {
                                    _id: 54,
                                    name: 'item 1-2-2-1-2',
                                    children: [
                                        {
                                            _id: 55,
                                            name: 'item 1-2-2-1-2-1',
                                        },
                                        {
                                            _id: 56,
                                            name: 'item 1-2-2-1-2-2',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            _id: 57,
                            name: 'item 1-2-2-2',
                            children: [
                                {
                                    _id: 58,
                                    name: 'item 1-2-2-2-1',
                                    children: [
                                        {
                                            _id: 59,
                                            name: 'item 1-2-2-2-1-1',
                                        },
                                        {
                                            _id: 60,
                                            name: 'item 1-2-2-2-1-2',
                                        },
                                    ],
                                },
                                {
                                    _id: 61,
                                    name: 'item 1-2-2-2-2',
                                    children: [
                                        {
                                            _id: 62,
                                            name: 'item 1-2-2-2-2-1',
                                        },
                                        {
                                            _id: 63,
                                            name: 'item 1-2-2-2-2-2',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}

const genTreeData = (d, i) => {
    d.deep = i++;
    d.expanded = true;

    if (!_.isEmpty(d.children)) {
        d.children.forEach(child => {
            child.parent = d;

            genTreeData(child, i)
        })
    }
}

const expandAll = (node) => {
    node.expanded = true;

    if (!_.isEmpty(node.children)) {
        node.children.forEach(child => {
            expandAll(child)
        })
    }
}

const collapseAll = (node) => {
    node.expanded = false;

    if (!_.isEmpty(node.children)) {
        node.children.forEach(child => {
            collapseAll(child)
        })
    }
}

const searchNode = (node, name) => {
    if (node.name === name) {
        return node;
    } else if (!_.isEmpty(node.children)) {
        let result = null;

        for (let i = 0; _.isEmpty(result) && i < node.children.length; i++) {
            result = searchNode(node.children[i], name)
        }

        return result;
    }

    return null
}

export const treeData = (state = {}, action) => {
    let i = 0;

    switch (action.type) {
        case EXPAND_ALL:
            expandAll(state)
            return state;
            break;

        case COLLAPSE_ALL:
            collapseAll(state)
            return state;
            break;

        case EXPAND_NODE:
        case COLLAPSE_NODE:
            let node = searchNode(state, action.payload)
            node.expanded = !node.expanded;
            return state;
            break;

        case RECEIVE_TREEDATA:
            genTreeData(initTreeData, 0);

            return initTreeData;
            break;

        default:
            return state;
    }
}

const initFabricItemList = [
    'item 1',
    'item 1-1',
    'item 1-1-1',
    'item 1-1-1-1',
    'item 1-1-1-1-1',
    'item 1-1-1-1-1-1',
    'item 1-1-1-1-1-2',
    'item 1-1-1-1-2',
    'item 1-1-1-1-2-1',
    'item 1-1-1-1-2-2',
    'item 1-1-1-2',
    'item 1-1-1-2-1',
    'item 1-1-1-2-1-1',
    'item 1-1-1-2-1-2',
    'item 1-1-1-2-2',
    'item 1-1-1-2-2-1',
    'item 1-1-1-2-2-2',
    'item 1-1-2',
    'item 1-1-2-1',
    'item 1-1-2-1-1',
    'item 1-1-2-1-1-1',
    'item 1-1-2-1-1-2',
    'item 1-1-2-1-2',
    'item 1-1-2-1-2-1',
    'item 1-1-2-1-2-2',
    'item 1-1-2-2',
    'item 1-1-2-2-1',
    'item 1-1-2-2-1-1',
    'item 1-1-2-2-1-2',
    'item 1-1-2-2-2',
    'item 1-1-2-2-2-1',
    'item 1-1-2-2-2-2',
    'item 1-2',
    'item 1-2-1',
    'item 1-2-1-1',
    'item 1-2-1-1-1',
    'item 1-2-1-1-1-1',
    'item 1-2-1-1-1-2',
    'item 1-2-1-1-2',
    'item 1-2-1-1-2-1',
    'item 1-2-1-1-2-2',
    'item 1-2-1-2',
    'item 1-2-1-2-1',
    'item 1-2-1-2-1-1',
    'item 1-2-1-2-1-2',
    'item 1-2-1-2-2',
    'item 1-2-1-2-2-1',
    'item 1-2-1-2-2-2',
    'item 1-2-2',
    'item 1-2-2-1',
    'item 1-2-2-1-1',
    'item 1-2-2-1-1-1',
    'item 1-2-2-1-1-2',
    'item 1-2-2-1-2',
    'item 1-2-2-1-2-1',
    'item 1-2-2-1-2-2',
    'item 1-2-2-2',
    'item 1-2-2-2-1',
    'item 1-2-2-2-1-1',
    'item 1-2-2-2-1-2',
    'item 1-2-2-2-2',
    'item 1-2-2-2-2-1',
    'item 1-2-2-2-2-2',
]

export const fabricItemList = (state = fromJS(initFabricItemList), action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectedFabricItem = (state = '', action) => {
    switch (action.type) {
        case EXPAND_ALL:
            return '';
            break;

        case COLLAPSE_ALL:
            return '';
            break;

        case SELECT_FABRICITEM:
            return action.payload;
            break;

        default:
            return state;
    }
}
