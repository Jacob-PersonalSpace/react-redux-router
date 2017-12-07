import _ from 'lodash'

import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    SUCCESS_LOGIN,
    EXPAND_NODE,
    COLLAPSE_NODE,
    EXPAND_ALL,
    COLLAPSE_ALL,
    SELECT_FABRICITEM,
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

const initTreeData = {
    _id: 1,
    name: 'item 1',
    children: [
        {
            _id: 2,
            name: 'item 1-1',
            children: [
                {
                    _id: 4,
                    name: 'item 1-1-1',
                },
                {
                    _id: 5,
                    name: 'item 1-1-2',
                },
            ],
        },
        {
            _id: 3,
            name: 'item 1-2',
            children: [
                {
                    _id: 6,
                    name: 'item 1-2-1',
                },
                {
                    _id: 7,
                    name: 'item 1-2-2',
                },
            ],
        },
    ],
}

const genTree = (d, i) => {
    d.deep = i++;
    d.expanded = true;

    if (!_.isEmpty(d.children)) {
        d.children.forEach(child => {
            child.parent = d;

            genTree(child, i)
        })
    }
}

export const treeData = (state = initTreeData, action) => {
    let i = 0;

    switch (action.type) {
        case EXPAND_ALL:
            state.expanded = true;
            return state;
            break;

        case COLLAPSE_ALL:
            state.expanded = false;
            return state;
            break;

        case EXPAND_NODE:
            console.log('???')
            return state;
            break;

        case COLLAPSE_NODE:
            break;

        case SUCCESS_LOGIN:
            let newNode = {
                _id: 1,
                name: 'item 1',
                children: [
                    {
                        _id: 2,
                        name: 'item 1-1',
                        children: [
                            {
                                _id: 4,
                                name: 'item 1-1-1',
                                children: [
                                    {
                                        _id: 8,
                                        name: 'item 1-1-1-1',
                                    },
                                    {
                                        _id: 9,
                                        name: 'item 1-1-1-2',
                                    },
                                ],
                            },
                            {
                                _id: 5,
                                name: 'item 1-1-2',
                                children: [
                                    {
                                        _id: 10,
                                        name: 'item 1-1-2-1',
                                    },
                                    {
                                        _id: 11,
                                        name: 'item 1-1-2-2',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        _id: 3,
                        name: 'item 1-2',
                        children: [
                            {
                                _id: 6,
                                name: 'item 1-2-1',
                                children: [
                                    {
                                        _id: 12,
                                        name: 'item 1-2-1-1',
                                    },
                                    {
                                        _id: 13,
                                        name: 'item 1-2-1-2',
                                    },
                                ],
                            },
                            {
                                _id: 7,
                                name: 'item 1-2-2',
                                children: [
                                    {
                                        _id: 14,
                                        name: 'item 1-2-2-1',
                                    },
                                    {
                                        _id: 15,
                                        name: 'item 1-2-2-2',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            }

            genTree(newNode, i)

            return newNode;
            break;

        default:
            genTree(state, i)
            return state;
    }
}

const initFabricItemList = [
    'item 1',
    'item 1-1',
    'item 1-1-1',
    'item 1-1-1-1',
    'item 1-1-1-2',
    'item 1-1-2',
    'item 1-1-2-1',
    'item 1-1-2-2',
    'item 1-2',
    'item 1-2-1',
    'item 1-2-1-1',
    'item 1-2-1-2',
    'item 1-2-2',
    'item 1-2-2-1',
    'item 1-2-2-2',
    'item 2',
    'item 2-1',
    'item 2-1-1',
    'item 2-1-1-1',
    'item 2-1-1-2',
    'item 2-1-2',
    'item 2-1-2-1',
    'item 2-1-2-2',
    'item 2-2',
    'item 2-2-1',
    'item 2-2-1-1',
    'item 2-2-1-2',
    'item 2-2-2',
    'item 2-2-2-1',
    'item 2-2-2-2',
]

export const fabricItemList = (state = initFabricItemList, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectedFabricItem = (state = '', action) => {
    switch (action.type) {
        case SELECT_FABRICITEM:
            return action.payload;
            break;

        default:
            return state;
    }
}
