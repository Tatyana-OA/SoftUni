// function createCalculator() {
//     let value = 0;
//     return {
//         add: function(num) { value += Number(num); },
//         subtract: function(num) { value -= Number(num); },
//         get: function() { return value; }
//     }
// }
function solve () {
    let testObj = {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
    describe('Function add', () => {
        it ('adds', () => {
            expect(testObj.add(5)).to.equal(5)
        })
    })
    
}





