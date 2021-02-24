function solve (group, type, day) {
    let price = 0;
    if (type==="Students") {
        switch(day) {
            case "Friday":
                price = 8.45;
                break;
            case "Saturday":
                price = 9.80;
                break;
            case "Sunday":
                price = 10.46;
                break;
        }
        price=group*price;
    }else if (type==="Business") {
        switch(day) {
            case "Friday":
                price = 10.90;
                break;
            case "Saturday":
                price = 15.60;
                break;
            case "Sunday":
                price = 16;
                break;
        }
        price=group*price;
    }else if (type==="Regular"){
        switch(day) {
            case "Friday":
                price = 15;
                break;
            case "Saturday":
                price = 20;
                break;
            case "Sunday":
                price = 22.50;
                break;
        }
        price=group*price;
    }
    if (type==="Students" && group>=30) {
        price = 0.85*price;
    } else if (type==="Business" && group >=100) {
        group = group - 10;
        price = group*price;
    } else if (type==="Regular" && group>=10 && group<=20) {
        price=0.95*price;
    }
    console.log (`Total price: ${price.toFixed(2)}`)
}
solve (40,
    "Regular",
    "Saturday"
    )
