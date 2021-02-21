function solve (flowerType,flowerQty, season) {
    let flowersNum= Number(flowerQty);
    let seasonBonus=0;
    let totalHoney=0;
    let flowerGive = 0;

    if (season==="Spring") {
        switch(flowerType) {
            case "Sunflower":
                flowerGive=10;
                totalHoney=flowersNum*flowerGive;
                break;
            case "Daisy":
                flowerGive=12;
                totalHoney=flowersNum*flowerGive*1.1;
                break;
            case "Lavender":
                flowerGive=12;
                totalHoney=flowersNum*flowerGive;
                break;
            case "Mint":
                flowerGive=10;
                totalHoney=flowersNum*flowerGive*1.1;
                break;
        }
        

    } else if (season==="Summer") {
        switch(flowerType) {
            case "Sunflower":
                flowerGive=8;
                break;
            case "Daisy":
                flowerGive=8;
                break;
            case "Lavender":
                flowerGive=8;
                break;
            case "Mint":
                flowerGive=12;
                break;
        }
        totalHoney=flowersNum*flowerGive*1.1;
        
    } else if (season==="Autumn") {
        switch(flowerType) {
            case "Sunflower":
                flowerGive=12;
                break;
            case "Daisy":
                flowerGive=6;
                break;
            case "Lavender":
                flowerGive=6;
                break;
            case "Mint":
                flowerGive=6;
                break;
        }
        totalHoney=flowersNum*flowerGive*0.95;
    }
console.log (`Total honey harvested: ${totalHoney.toFixed(2)}`)

}

solve("Sunflower", "11", "Autumn")
