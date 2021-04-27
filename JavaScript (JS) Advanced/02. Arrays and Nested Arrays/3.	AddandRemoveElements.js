function addRemove(input) {
    let result = [];
    let starter = 0;

    for (let i=0; i <input.length; i++) {
        let command = input[i]
        starter++
        if (command==='add') {      
            result.push(starter)
        } else if (command==='remove' && input.includes("add")) {
            result.pop()
        } 
        
    }
    if (result.length<1) {
        return 'Empty'
    }else {
        return result.join('\n')
    }
    
}
console.log(addRemove(['add', 
'add', 
'add', 
'add']
))
console.log(addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
))
console.log(addRemove(['remove', 
'remove', 
'remove']
))
