function solve (input) {
    let first = 0; 

    while (true) { 
        let word = input[first]; 
        first++; /
        
        if (word==="Stop") { 
            break;
        }
        console.log (word) 
    }
   
}


solve(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
