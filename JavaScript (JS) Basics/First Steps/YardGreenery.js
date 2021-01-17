function squareFt (squares) {
    let singlePriceSqFt = 7.61;

    let solve = 7.61*squares;
    let discount = 0.18*solve;
    let discountedPrice = solve - (0.18*solve);
    console.log (`The final price is: ${discountedPrice} lv.`)
    console.log (`The discount is: ${discount} lv.`)
}

squareFt("550")
