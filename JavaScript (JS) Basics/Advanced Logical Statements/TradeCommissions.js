function solve (town, sales) {
    sales = Number(sales);
    let commissionRate=0;

    if (sales>=0 && sales <=500) {
        switch(town){
            case "Sofia":
            commissionRate=0.05;
            break;
            case "Varna":
            commissionRate=0.045;
            break;
            case "Plovdiv":
            commissionRate=0.055;
            break;
        }
        
    }else if (sales>500 && sales<=1000){
        switch(town){
        case "Sofia":
            commissionRate=0.07;
            break;
            case "Varna":
            commissionRate=0.075;
            break;
            case "Plovdiv":
            commissionRate=0.08;
            break;
        }
    } else if (sales>1000 && sales<=10000) {
        switch (town) {
        case "Sofia":
            commissionRate=0.08;
            break;
            case "Varna":
            commissionRate=0.10;
            break;
            case "Plovdiv":
            commissionRate=0.12;
            break;
        }
    }else if (sales>10000) {
        switch(town) {
        case "Sofia":
            commissionRate=0.12;
            break;
            case "Varna":
            commissionRate=0.13;
            break;
            case "Plovdiv":
            commissionRate=0.145;
            break;
        }
    }
    if (commissionRate<0.01 || commissionRate>0.145){
        console.log ("error")
    } else {
        totalDisplay = (commissionRate*sales).toFixed(2)
        console.log (totalDisplay)
    }

}
solve ("Plovdiv",
"1000")






