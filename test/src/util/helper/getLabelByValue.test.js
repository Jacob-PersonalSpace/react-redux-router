import { expect } from 'chai'
import { fromJS } from 'immutable'

import * as helper from '../../../../src/util/helper'

const testMethod = helper.getLabelByValue

describe('util › helper › getLabelByValue', () => {
    const masterData = fromJS([{
        label: 'A',
        value: 'a',
    }, {
        label: 'B',
        value: 'b',
    }, {
        label: 'C',
        value: 'c',
    }])

    it('find all', () => {
        const expectReturnData = "A;B;C"

        expect(testMethod(masterData, "a+b+c", "+", ";")).to.deep.equal(expectReturnData)
    })
    
    it('find one', () => {
        const expectReturnData = "A"

        expect(testMethod(masterData, "a+d+e", "+", ";")).to.deep.equal(expectReturnData)
    })
    
    it('find null', () => {
        const expectReturnData = ""

        expect(testMethod(masterData, "d+e", "+", ";")).to.deep.equal(expectReturnData)
    })
    
    it('masterData is []', () => {
        const masterData2 = fromJS([])
        const expectReturnData = ""

        expect(testMethod(masterData2, "d+e", "+", ";")).to.deep.equal(expectReturnData)
    })
    
    it('values is ""', () => {
        const expectReturnData = ""

        expect(testMethod(masterData, "", "+", ";")).to.deep.equal(expectReturnData)
    })
    
    it('values is null', () => {
        const expectReturnData = ""

        expect(testMethod(masterData, null, "+", ";")).to.deep.equal(expectReturnData)
    })
})
