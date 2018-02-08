import { fromJS } from 'immutable'

import {
    EXPAND_TRIALWEAVE_LEFT_CONTAINER,
    COLLAPSE_TRIALWEAVE_LEFT_CONTAINER,
} from '../../../actionTypes/index'

export const onExpandDirectory = () => ({
    type: EXPAND_TRIALWEAVE_LEFT_CONTAINER,
})

export const onCollapseDirectory = () => ({
    type: COLLAPSE_TRIALWEAVE_LEFT_CONTAINER,
})
