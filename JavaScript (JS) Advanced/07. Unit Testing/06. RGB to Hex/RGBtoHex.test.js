const rgbToHexColor = require('./06.RGBtoHex')
const {expect} = require ('chai')

describe ('rgbToHexColor unit testing', () => {
    it ('red is invalid - string', () => {
        expect(rgbToHexColor('a', 125, 255)).to.undefined
    })
    it ('red is invalid- float', () => {
        expect(rgbToHexColor(12.5, 125, 255)).to.undefined
    })
    it ('red is invalid- out of range', () => {
        expect(rgbToHexColor(-20, 125, 255)).to.undefined
    })
    it ('green is invalid - string', () => {
        expect(rgbToHexColor( 125,'a', 255)).to.undefined
    })
    it ('green is invalid - float', () => {
        expect(rgbToHexColor( 125,235.666, 255)).to.undefined
    })
    it ('green is invalid - out of range', () => {
        expect(rgbToHexColor( 125,1256, 255)).to.undefined
    })
    it ('blue is invalid - string', () => {
        expect(rgbToHexColor( 125, 255,'a')).to.undefined
    })
    it ('blue is invalid - float & out of range', () => {
        expect(rgbToHexColor( 125, 255,-125.555)).to.undefined
    })
    it ('returns white', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
    })
    it ('returns black', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000')
    })
    it ('returns random', () => {
        expect(rgbToHexColor(103,108,159)).to.equal('#676C9F')
    })
    
})
