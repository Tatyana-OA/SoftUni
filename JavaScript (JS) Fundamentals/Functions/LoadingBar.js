function load(num){
    let percentSigns = num/10;
    let dots = 10 - percentSigns; 


    if (percentSigns==10) {
        console.log ("100% Complete!")
        console.log ("[%%%%%%%%%%]")
    } else {
        console.log(num+"% "+"["+"%".repeat(percentSigns)+ ".".repeat(dots)+"]")
        console.log ("Still loading...")
    }
   

}load (40)
