import { expect } from 'chai'

import * as apiFetch from '../../../../src/util/apiFetch'

const testMethod = apiFetch.encodeUrl

describe('util › apiFetch.js › encodeUrl', () => {
    const expectReturnData = 'http://test.com/a/b'

    it('resolve', () => {
        expect(testMethod('http://test.com/{test1}/{test2}', {
            test1: 'a',
            test2: 'b',
        })).to.deep.equal(expectReturnData)
    })
})
