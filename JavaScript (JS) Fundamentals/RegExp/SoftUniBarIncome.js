function bar(input){
    let myRegExp = /[%](?<name>[A-Z][a-z]+)[%]([^\|\$%\.]+)?[<](?<product>\w+)[>]([^\|\$%\.]+)?[|](?<count>[0-9]+)[|]([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)[$]/g;
    let matched = myRegExp.exec(input);
    let totalIncome = 0;
    let currentPrice = 0;

    while(matched!=null) {
        currentPrice=0;
        let name = matched.groups[`name`];
        let product = matched.groups[`product`]
        let qty = Number(matched.groups[`count`])
        let price = Number(matched.groups[`price`])
        totalIncome+=(price*qty)
        currentPrice=price*qty
        console.log(`${name}: ${product} - ${currentPrice.toFixed(2)}`)
        matched = myRegExp.exec(input);
    }
    if (matched==null) {
        console.log(`Total income: ${totalIncome.toFixed(2)}`)
    }
 
}
bar([
    `%InvalidName%<Croissant>|2|10.3$`,
    `%Peter%<Gum>1.3$`,
    `%Maria%<Cola>|1|2.4`,
    `%Valid%<Valid>valid|10|valid20$`,
    `end of shift`,
  ]);
