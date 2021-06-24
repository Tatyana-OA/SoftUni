function extendPrototype(classToExtend) {

    classToExtend.prototype.species = "Human" //adding species: Human via the prototype
    classToExtend.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ${this.toString()}` // using "this" which is the scope of classToExtend
    }
    // adding a function to a class using the prototype
}
