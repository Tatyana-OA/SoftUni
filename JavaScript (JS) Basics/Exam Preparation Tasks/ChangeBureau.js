function solve(bitcoin, china, commission) {
    let bitcoinS=Number(bitcoin);
    let chinaS=Number(china);
    let commissionS= Number(commission);
    
    let bitcoinLev = 1168*bitcoinS // bitcoin v leva
    let chinaDollar = 0.15*chinaS // uan v dollar

    let chinaToLev = chinaDollar*1.76;

    let allLeva = bitcoinLev + chinaToLev;
    let allEuro = allLeva/1.95;

    let commissionCalc = (commissionS/100) * allEuro
    let final = (allEuro-commissionCalc).toFixed(2);
    console.log (final)

    


}
solve ("1", "5", "5")
