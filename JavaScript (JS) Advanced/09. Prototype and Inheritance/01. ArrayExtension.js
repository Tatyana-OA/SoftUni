

(function solve() {
    Array.prototype.last = function () {
        return this[this.length-1]
    };
    Array.prototype.skip = function (n) {
        if (typeof(n) === 'number' && n>=0 && n<this.length) {
            return this.slice(n,)
        }
        
    };
    Array.prototype.take = function (n) {
        if (typeof(n) === 'number' && n>=0 && n<this.length) {
            return this.slice(0,n)
        }
        
    };
    Array.prototype.sum = function () {
        return this.reduce((acc,c) => acc+c)
    };
    Array.prototype.average = function () {
        return this.reduce ((acc,c) => acc+c /this.length, 0)
    };

    
} ())
let myArr = [1,2,3,5,6,7]
console.log(myArr.last())
console.log(myArr.average())


