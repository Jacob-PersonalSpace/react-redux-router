import { expect } from 'chai'
import { fromJS } from 'immutable'

import * as leftContainer from '../../../../../src/joAssign/reducers/leftContainer'
import { RECEIVE_REQUEST_LIST } from '../../../../../src/actionTypes/index'

const testMethod = leftContainer.requestList

describe('joAssign › reducer › requestList', () => {
    it('return array', () => {
        let mockAction = {
            type: RECEIVE_REQUEST_LIST,
            payload: fromJS([
                {
                    "brandCode": "brandCode1",
                    "child": [{
                        "handloomRequestNo": "handloomRequestNo1",
                        "count": 1,
                        "_id": "_id1"
                    },
                    {
                        "handloomRequestNo": "handloomRequestNo2",
                        "count": 2,
                        "_id": "_id2"
                    }],
                },
                {
                    "brandCode": "brandCode2",
                    "child": [{
                        "handloomRequestNo": "handloomRequestNo3",
                        "count": 3,
                        "_id": "_id3"
                    },
                    {
                        "handloomRequestNo": "handloomRequestNo4",
                        "count": 4,
                        "_id": "_id4"
                    }],
                },
                {
                    "brandCode": "brandCode3",
                    "child": [],
                },
            ])
        }

        let actualReturnData = testMethod(undefined, mockAction)
        let expectReturnData = [
            {
                "brandCode": "brandCode1",
                name: "brandCode1",
                deepth: 0,
                expanded: false,
                "child": [{
                    "handloomRequestNo": "handloomRequestNo1",
                    name: "handloomRequestNo1",
                    "count": 1,
                    deepth: 1,
                    leaf: true,
                    "_id": "_id1"
                },
                {
                    "handloomRequestNo": "handloomRequestNo2",
                    name: "handloomRequestNo2",
                    "count": 2,
                    deepth: 1,
                    leaf: true,
                    "_id": "_id2"
                }]
            },
            {
                "brandCode": "brandCode2",
                name: "brandCode2",
                deepth: 0,
                expanded: false,
                "child": [{
                    "handloomRequestNo": "handloomRequestNo3",
                    name: "handloomRequestNo3",
                    "count": 3,
                    deepth: 1,
                    leaf: true,
                    "_id": "_id3"
                },
                {
                    "handloomRequestNo": "handloomRequestNo4",
                    name: "handloomRequestNo4",
                    "count": 4,
                    deepth: 1,
                    leaf: true,
                    "_id": "_id4"
                }]
            },
            {
                "brandCode": "brandCode3",
                name: "brandCode3",
                deepth: 0,
                expanded: false,
                "child": [],
            },
        ]

        expect(actualReturnData.toJS()).to.deep.equal(expectReturnData)
    })

    it('return empty array', () => {
        let mockAction = {
            type: RECEIVE_REQUEST_LIST,
            payload: fromJS([])
        }

        let actualReturnData = testMethod('abc', mockAction)
        let expectReturnData = []

        expect(actualReturnData.toJS()).to.deep.equal(expectReturnData)
    })

    it('return default state', () => {
        let mockAction = {}

        let actualReturnData = testMethod(undefined, mockAction)
        let expectReturnData = []

        expect(actualReturnData.toJS()).to.deep.equal(expectReturnData)
    })

    it('return paramter state', () => {
        let mockAction = {}

        let actualReturnData = testMethod('abc', mockAction)
        let expectReturnData = 'abc'

        expect(actualReturnData).to.deep.equal(expectReturnData)
    })
})
