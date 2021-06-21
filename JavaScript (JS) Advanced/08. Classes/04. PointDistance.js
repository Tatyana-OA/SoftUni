function solve() {

class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1,p2) {
        return Math.sqrt( Math.pow((p1.x - p2.x),2)  + Math.pow((p1.y - p2.y),2))
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(p1.distance(p1, p2));

let p8 = new Point(1,3)
let p10 = new Point(5,8)

console.log(p8.distance(p8,p10))

}
solve()
