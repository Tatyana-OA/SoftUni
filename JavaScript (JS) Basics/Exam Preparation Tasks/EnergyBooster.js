function solve(fruit, size, smth){


    let smallWatermelon = 56;
    let bigWatermelon = 28.70;
    let smallMango = 36.66;
    let bigMango = 19.60;
    let smallPine = 42.10;
    let bigPine = 24.80;
    let smallBerry = 20;
    let bigBerry = 15.20;
    let price = 0;
    let discount = 0;

    if (fruit==="Watermelon") {
        if (size==="small") {
            price = 2*smallWatermelon*smth;
        } else if (size==="big") {
            price = 5*bigWatermelon*smth;
        }
    }

       if (fruit==="Mango") {
            if (size==="small") {
                price = 2*smallMango*smth;
            } else if (size==="big") {
                price = (5*bigMango*smth);
            }
        }

            if (fruit==="Pineapple") {
                if (size==="small") {
                    price = 2*smallPine*smth;
                } else if (size==="big") {
                    price = 5*bigPine*smth;
                }
            }
           if (fruit==="Raspberry") {
                    if (size==="small") {
                        price = 2*smallBerry*smth;
                    } else if (size==="big") {
                        price = 5*bigBerry*smth;
                    }
                }
    

    if (price>=400 && price<=1000) {
        discount=0.1*price;
        price-=discount;
    } else if (price>1000) {
        discount=0.5*price;
        price-=discount;
    }

    console.log(`${price.toFixed(2)} lv.`)


}

solve(`Mango`, `big`, `8`)
