const {expect}= require('chai')
const sum = require('./04.SumofNums')

describe('Testing sumNumbers', ()=> {
    it ('input is array', () => {
        expect(sum([1,2])).to.equal(3)
    })
    it ('input is empty array', () => {
        expect(sum([])).to.equal(0)
    })
    it ('input is a string', () => {
        expect(sum('str')).to.NaN
    })
    it ('input is array of strings', () => {
        expect(sum(['str','str'])).to.NaN
    })
    it ('input is array with negative and positive', () => {
        expect(sum([-1,0,2])).to.equal(1)
    })

})
