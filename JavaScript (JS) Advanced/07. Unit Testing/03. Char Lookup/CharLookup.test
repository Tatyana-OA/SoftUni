const lookupChar = require('./03.charLookUp')
const {expect} = require('chai')

describe('Testing CharLookUp', () => {
    it ('First param is not a string', () => {
        expect(lookupChar(4,4)).to.equal(undefined)
    })
    it ('Second param is not a number', () => {
        expect(lookupChar('string', 'string')).to.equal(undefined)
    })
    it ('Second param is floating number', () => {
        expect(lookupChar('string', 3.5)).to.equal(undefined)
    })
    it (`Index is incorrect (bigger)`, () => {
        expect(lookupChar('yes',6)).to.equal('Incorrect index')
    })
    it ('Index is incorrect (equal)', () => {
        expect(lookupChar('yes',3)).to.equal('Incorrect index')
    })
    it ('Index is incorrect (negative)', () => {
        expect(lookupChar('yes', -3)).to.equal('Incorrect index')
    })
    it (`All good`, () => {
        expect(lookupChar('yes',1)).to.equal('e')
    })
    it ('String is empty', () => {
        expect(lookupChar("", 0)).to.equal("Incorrect index")
    })
})
