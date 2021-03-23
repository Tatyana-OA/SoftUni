function employees(input){
    let myObj = {};
    for (let i =0; i<input.length; i++) {
        let employeeLength = input[i].length;
        let employeeName = input[i];
        myObj.name = employeeName
        myObj.number = employeeLength;
        console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.number}`)

    }
    
}
