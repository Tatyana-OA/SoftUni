const mathEnforcer = require('./04.MathEnforcer')
const {expect} = require('chai')

describe('AddFive testing', () => {
    it('Adds 5 to number', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10)
    })
    it ('Param is not a number', () => {
        expect(mathEnforcer.addFive('test')).to.equal(undefined)
    })
    it ('Works with negatives', () =>{
        expect(mathEnforcer.addFive(-5)).to.equal(0)
    })
    it ('Works with floating', () => {
        expect(mathEnforcer.addFive(1,5)).closeTo(6,5,0.01)
    })
    it ('Works with negative floating', () => {
        expect(mathEnforcer.addFive(-20.55)).closeTo(-15.55,0.01)
    })
})
describe('subtractTen testing', () => {
    it('Subtracts 10 from number', () => {
        expect(mathEnforcer.subtractTen(15)).to.equal(5)
    })
    it ('Param is not a number', () => {
        expect(mathEnforcer.subtractTen('test')).to.equal(undefined)
    })
    it ('Works with negatives', () =>{
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
    })
    it ('Works with floating', () => {
        expect(mathEnforcer.subtractTen(1.55)).closeTo(-8.45,0.01)
    })
})
describe ('Sums two numbers', () => {
    it('Sums two number params', () => {
        expect(mathEnforcer.sum(1,2)).to.equal(3)
    })
    it ('First param is not a number', () => {
        expect(mathEnforcer.sum('yes',2)).to.equal(undefined)
    })
    it ('Second param is not a number', () => {
        expect(mathEnforcer.sum(2, 'yes')).to.equal(undefined)
    })
    it('Both params are not numbers', ()  => {
        expect(mathEnforcer.sum('yes', 'no')).to.equal(undefined)
    })
    it ('Works with negatives', () =>{
        expect(mathEnforcer.sum(-1,-1)).to.equal(-2)
    })
    it ('Works with floating', () => {
        expect(mathEnforcer.sum(1.5,1.25)).closeTo(2.75,0.01)
    })
})
