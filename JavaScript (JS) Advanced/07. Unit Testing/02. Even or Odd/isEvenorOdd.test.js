const isOddOrEven = require('./02_EvenOdd.js')
const {expect} = require('chai')

describe('IsOddEven', () => {
    it ('works with odd', () => {
        expect(isOddOrEven('yes')).to.equal('odd')
    })
    it (`works with even`, () => {
        expect(isOddOrEven('no')).to.equal('even')
    })
    it (`undefined with nums`, () => {
        expect(isOddOrEven(5)).to.equal(undefined)
    })

})
