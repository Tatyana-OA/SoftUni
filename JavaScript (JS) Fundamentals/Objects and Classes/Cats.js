function cats(catArr) {

class Cats {
    constructor(name,age) {
    this.name=name;
    this.age=age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`)
               }
}
   
   for (let i =0; i<catArr.length; i++) {
            let currentCat=catArr[i].split(" ");
            let name = currentCat[0]
            let age=currentCat[1]
            let newCat = new Cats(name,age)
            newCat.meow()
            
        }

        // Just code to try it out, creating a new cat in the class
        // let myCat = new Cats('Wingy', 3)
        // console.log(myCat)
        // myCat.meow()

}
