function solve (input) {
let index = Number(input[0]);
let dailyGoldLv = 0
let btcCount = 0;
let totalMoney = 0;
let dayCount = 0;

for (let i=0; i<input.length; i++) {
    let conseqDay = input[i]
    if (i===2 || (i+1)%3==0) {
        conseqDay=0.7*conseqDay
    }
    dailyGoldLv= Number(((67.51*conseqDay)))
    dailyGoldLv= Number((dailyGoldLv+totalMoney))
    while(dailyGoldLv>= 11949.16) {
        btcCount++
        if (btcCount===1) {
           dayCount=i+1
        }
        dailyGoldLv-= 11949.16
    } 
        totalMoney=dailyGoldLv;
}
console.log (`Bought bitcoins: ${btcCount}`)
if (dayCount>0) {
    console.log (`Day of the first purchased bitcoin: ${dayCount}`)
}
console.log (`Left money: ${totalMoney.toFixed(2)} lv.`)

}
solve ([100,200,300])
