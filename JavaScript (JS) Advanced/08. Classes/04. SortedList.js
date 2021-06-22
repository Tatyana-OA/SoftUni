class List {
    constructor () {
        this.arr = []
        this.size = 0;
    }
    add(element) {
        this.size++
       this.arr.push(element)
       return this.arr.sort((a,b) => (a-b))
        
    };
    remove(index) {
        if (index>=0 && index<this.arr.length) {
            this.arr.splice(index,1)
            this.size--
            return this.arr.sort((a,b) => (a-b))
            
        }
       
    };
    get (index) {
        if (index>=0 && index<this.arr.length) {
            return this.arr[index]
        }
    };
   

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list.hasOwnProperty('size'))

