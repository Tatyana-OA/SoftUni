function solve(input) {
    let isPositive = false;
    for (let i=0; i<input.length; i++) {
        let current = (input[i])
        let toString = current.toString().split("")
        for (let j=0; j<toString.length; j++) {
            let reverse = toString.reverse()
            reverse = Number(reverse.join(""))
            if (reverse!=current) {
                console.log ("false")
                break;
            } else {
                isPositive=true;
                console.log ("true")
                break;
            }
        }
       

    }

}solve ([123,323,421,121])
