function bdayParty (rent) {
    let rentPrice=Number(rent);
    let cakePrice = Number(0.2*rentPrice);
    let drinksPrice =Number(cakePrice-(0.45*cakePrice));
    let animatorPrince =Number(1/3*rentPrice);

    console.log(Number(rentPrice)+Number(cakePrice)+Number(drinksPrice)+Number(animatorPrince));
   
}
bdayParty("3720")
