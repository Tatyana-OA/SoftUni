function solve (type, rows, columns) {
    rows=Number(rows);
    columns=Number(columns);
    let price = 0;
    if (type==="Premiere") {
        price = 12.00;
    }else if (type==="Normal") {
        price = 7.50;
    }else if (type==="Discount") {
        price=5.00;
    }
    let finalResult = (price*rows*columns).toFixed(2);
    console.log (`${finalResult} leva.`)
}

solve("Discount",
"12",
"30")
