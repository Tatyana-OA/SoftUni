function solve (input){
    let theOneBook = input[0]  
    let index = 1 
    let isFound = false; 
  
    while (true) { 
        let nextBook=input[index++]
      
        if (nextBook===theOneBook) {  
            isFound = true; 
            break;
           
        }
        
        if (nextBook==="No More Books") {
            break;
        }
    }

    if (isFound) { 
        console.log (`You checked ${index-2} books and found it.`)
    } else {
        console.log (`The book you search is not here!`)
        console.log (`You checked ${index-2} books.`)

    }
}


solve (["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
