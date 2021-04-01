function modern(input){
    let iterable = input.split(" ")
    iterable.forEach(element => {
               if (element[0]=='#' && element.length>1) {
                   let isOnlyLetters=true;
                   element = element.slice(1); //takes everything but the first char to get rid of #
                   for (const char of element){
                       let code=char.charCodeAt();
                       if (code<65 || code>90 && code<97 || code>122 ){
                           isOnlyLetters=false;
                           break;
                       }
                   }
                   if (isOnlyLetters) {
        
                    console.log(element)
                }
               }
       
    });

}
