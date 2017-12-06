import { INPUT_USERNAME, INPUT_PASSWORD } from '../../actionTypes'

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
    deep: 0,
    expand: true,
    children: [
        {
            _id: 2,
            name: 'item 1-1',
            parent: 1,
            deep: 1,
            expand: true,
            children: [
                {
                    _id: 4,
                    name: 'item 1-1-1',
                    parent: 2,
                    deep: 2,
                    expand: true,
                },
                {
                    _id: 5,
                    name: 'item 1-1-2',
                    parent: 2,
                    deep: 2,
                    expand: true,
                },
            ],
        },
        {
            _id: 3,
            name: 'item 1-2',
            parent: 1,
            deep: 1,
            expand: false,
            children: [
                {
                    _id: 6,
                    name: 'item 1-2-1',
                    parent: 3,
                    expand: true,
                    deep: 2,
                },
                {
                    _id: 7,
                    name: 'item 1-2-2',
                    parent: 3,
                    deep: 2,
                    expand: true,
                },
            ],
        },
    ],
}

export const treeData = (state = initTreeData, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
