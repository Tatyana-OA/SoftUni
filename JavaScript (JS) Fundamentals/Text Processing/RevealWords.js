function reveal(one,two){
    let firstString=one.split(", ")
    firstString.forEach(element => {
        let elLength = element.length;
        let replacedTemplate = two.replace("*".repeat(elLength),element)
        two=replacedTemplate
    });

   console.log(two)
    
   
    }
