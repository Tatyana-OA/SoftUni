class Stringer {
    constructor(innerString,innerLength) {
        this.innerString = innerString
        this.innerLength= innerLength
    }
    increase(length) {
    this.innerLength+= Number(length)
    }
    decrease(length) {
    this.innerLength-= Number(length)
    this.innerLength<0 ? this.innerLength=0 : this.innerLength
    }
    toString() {
    let resultString = ""
    if (this.innerString.length>this.innerLength) {
        let cut = this.innerString.length - this.innerLength
        resultString= this.innerString.slice(0,-cut) + `...`
    } else {
        resultString=this.innerString
    }
    return resultString

    }
    
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
