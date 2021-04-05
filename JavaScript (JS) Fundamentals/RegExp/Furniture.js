function furnish(input){
    let myRegExp = /[>]{2}(?<product>[A-Za-z]+)[<]{2}(?<price>[\d+\.\d+]+)!(?<qty>\d+)/g;
    let totalMoney = 0;
    let wordArr = [];
    let matchOne = myRegExp.exec(input);

    while (matchOne!=null) {
        let item = matchOne.groups['product']
        let price = Number(matchOne.groups['price'])
        let qty = Number(matchOne.groups['qty'])
        wordArr.push(item)
        totalMoney+=price*qty;      
        matchOne = myRegExp.exec(input);

    }
    if (matchOne==null) {
        console.log(`Bought furniture:`)
        if (wordArr.length>0) {
            for (i of wordArr) {
                console.log(i)
            }
        }

        console.log(`Total money spend: ${totalMoney.toFixed(2)}`)
    }

}
  
    // for (let i of input){
    //     if (i==='Purchase') {
    //         break;
    //     }
    // }

furnish([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
