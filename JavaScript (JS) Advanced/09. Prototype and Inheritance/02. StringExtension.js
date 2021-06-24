(function solve() {
    String.prototype.ensureStart = function(str) {
        if (!this.includes(str)) {
            let result = str + this
            return result
        } else {
            return this
        }
    }
    String.prototype.ensureEnd = function(str) {
        if (!this.includes(str)) {
            let result = this + string
            return result
        }else {
            return this
        }
    }
    String.prototype.isEmpty = function () {
        return this === "" ? true : false
    }
    String.prototype.truncate = function (n) {
        if (this.length<n) {
            return this
        } else if (this.length>n) {
            let splitString = this.split(" ")
            splitString.pop()
            splitString.push("...")
            
            if (splitString.join('').length <= n) {
                return splitString
            }
            
            
        }
    }
    String.prototype.format = function (string,...params) {
        
    }

}())

let strA = 'my string';
console.log(strA = strA.ensureStart('my'));
console.log(strA = strA.ensureStart('hello '));
console.log(strA = strA.truncate(16));
console.log(strA = strA.truncate(14))
