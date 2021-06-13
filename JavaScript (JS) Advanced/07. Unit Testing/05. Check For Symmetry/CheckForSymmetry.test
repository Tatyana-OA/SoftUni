const {expect} = require('chai')
const isSymmetric = require('./05.CheckForSymmetry')

describe('Testing isSymmetric', () => {
    it ('input is a string', ()=> {
        expect(isSymmetric('str')).to.equal(false)
    })
    it ('input is a number', ()=> {
        expect(isSymmetric(5)).to.equal(false)
    })
    it ('input is an object', () => {
        expect(isSymmetric({})).to.equal(false)
    })
    it ('input is symmetric array Numbers even', ()=> {
        expect(isSymmetric([1,1])).to.equal(true)
    })
    it ('input is symmetric array Numbers odd', ()=> {
        expect(isSymmetric([1,1,1])).to.equal(true)
    })
    it ('input is not symmetric Numbers', () => {
        expect(isSymmetric([1,2,2])).to.equal(false)
    })
    it ('input is not symmetric Numbers', () => {
        expect(isSymmetric([1,1,2,2])).to.equal(false)
    })
    it ('input is symmetric array Strings', ()=> {
        expect(isSymmetric(['a','a'])).to.equal(true)
    })
    it ('input is symmetric array different types', ()=> {
        expect(isSymmetric(['1',1])).to.equal(false)
    })
    it ('input is not symmetric Strings', () => {
        expect(isSymmetric(['a','a','c'])).to.equal(false)
    })
    it ('input is array with one value', () => {
        expect(isSymmetric([0])).to.equal(true)
    })
    it ('input is has positive and negative values', () => {
        expect(isSymmetric([-1,2,2,-1])).to.equal(true)
    })
   
   
})
