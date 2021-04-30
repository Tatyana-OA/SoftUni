function cityTaxes(name,population,treasury) {
let cityObj = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes(){
        this.treasury+= this.population*this.taxRate;
    },
    applyGrowth(percent){
        this.population+= Math.floor((this.population*percent)/100);
    },
    applyRecession(percent){
        this.treasury-=Math.floor((this.treasury*percent)/100);
    }
}
// function inside an object uses "this" to work with object keys
// no "this" if its the function parameter, though (see percent)
// calling an object function outside the object performs its action on the object
// see below 
cityObj.collectTaxes()
cityObj.applyGrowth(5)
return cityObj
}

console.log(cityTaxes('Tortuga',
7000,
15000
))
