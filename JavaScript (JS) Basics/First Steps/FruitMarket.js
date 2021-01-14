function fruitmarket (strawberryPriceKg,kgBananas,kgOranges,kgRaspberries,kgStrawberries) {

    raspberryPrice = Number(strawberryPriceKg- (0.5*strawberryPriceKg));
    orangePrice = Number(raspberryPrice-(0.4*raspberryPrice));
    bananaPrice = Number(raspberryPrice-(0.8*raspberryPrice));

    let totalbill = Number(strawberryPriceKg*kgStrawberries+ orangePrice*kgOranges + bananaPrice*kgBananas + kgRaspberries*raspberryPrice);
    console.log(totalbill)

}
fruitmarket("63.5",
"3.57",
"6.35",
"8.15",
"2.5")

