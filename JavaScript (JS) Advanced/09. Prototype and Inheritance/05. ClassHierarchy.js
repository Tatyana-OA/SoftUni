// function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units 
        }
        get area() {

        }
        changeUnits(value) {
            if (value==='mm') {
                this.units = 'mm'
            }else if (value==="m") {
                this.units = 'm'
            }
        }
        toString() {
            return `Figure units: ${this.units}`
        }

    }
    class Circle extends Figure{
        constructor(r, units) {
            this.units = super(units)
            this.r = r
        }
        get radius() {
            if (this.units==='mm') {
                this.r = this.r*10
            } else if (this.units ==='m') {
                this.r = this.r/100
            }
        }
        get area () {
            return Math.PI*r*r
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - raidus: ${this.radius}`
        }


    }
    class Rectangle extends Figure {
        constructor (width, height, units) {
            this.width = width,
            this.height = height,
            this.units = super(units)
        }
        get width ()
        get area() {
            return this.width*this.height
        }
        toString() {
            return `${super.toString()} Area: ${area} - width: ${this.width}, height: ${this.height}`
        }
    }
// }

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
