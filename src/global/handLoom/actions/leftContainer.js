import { fromJS } from 'immutable'

import {
    onAddUserErrorForAlert,
    onAddAPIRequestForBlockUi,
    onRemoveAPIRequestForBlockUi,
} from '../../actions'

import {
    EXPAND_HANDLOOM_LEFT_CONTAINER,
    COLLAPSE_HANDLOOM_LEFT_CONTAINER,
} from '../../../actionTypes/index'

export const onExpandDirectory = () => ({
    type: EXPAND_HANDLOOM_LEFT_CONTAINER,
})

export const onCollapseDirectory = () => ({
    type: COLLAPSE_HANDLOOM_LEFT_CONTAINER,
})
