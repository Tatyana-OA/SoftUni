function mine(input){
    let niHao = {};
    let quantity = 0;
    let resource='';
    let count = 0;
    for (let line of input) {
        if (count==0 || count%2==0) {
             resource = line;
        } else {
             quantity = Number(line)
        }
        count++
        if (count%2==0) {
            if (niHao.hasOwnProperty(resource)) {
                let minedQty = niHao[resource]
                // this means that there's already some quantity and we get it using resource[quantity]
                minedQty+=quantity //adding it up
                niHao[resource]=minedQty
            } else {
             niHao[resource]=quantity
            }
            }   
        }
         for (key in niHao){
             console.log(`${key} -> ${niHao[key]}`)
         }

}
