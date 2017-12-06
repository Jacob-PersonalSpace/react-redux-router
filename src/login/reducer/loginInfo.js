import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    CHANGE_TREE_DATA,
    SUCCESS_LOGIN,
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

const initTreeData = [
    {
        title: "Fabric Item 1",
        expanded: true,
        children: [
            {
                title: "Fabric Item 1-1",
                expanded: true,
                children: [
                    {
                        title: 'Fabric Item 1-1-1',
                    },
                    {
                        title: 'Fabric Item 1-1-2',
                    },
                ],
            },
            {
                title: "Fabric Item 1-2",
            },
        ],
    },
]

const initTreeData2 = [
    {
        title: "Fabric Item 1",
        expanded: true,
        children: [
            {
                title: "Fabric Item 1-1",
                expanded: true,
                children: [
                    {
                        title: 'Fabric Item 1-1-1',
                    },
                    {
                        title: 'Fabric Item 1-1-2',
                    },
                ],
            },
            {
                title: "Fabric Item 1-2",
                expanded: true,
                children: [
                    {
                        title: 'Fabric Item 1-2-1',
                    },
                    {
                        title: 'Fabric Item 1-2-2',
                    },
                ],
            },
        ],
    },
]

export const treeData = (state = initTreeData, action) => {
    switch (action.type) {
        case CHANGE_TREE_DATA:
            return action.payload;
            break;

        case SUCCESS_LOGIN:
            return initTreeData2;
            break;

        default:
            return state;
    }
}
