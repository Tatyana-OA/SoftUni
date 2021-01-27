function solve (days, type, review) {
    days=Number(days);
    let priceFor1 = 18.00;
    let priceAp = 25.00;
    let pricePresAp = 35.00;
    let stay = days - 1; //престой в нощувки
    let discount = 0; // за престоя
    let totalDiscount =0; // за оценката
    let totalPrice =0; // за престоя
    let finalPrice = 0; // за оценката

    if (type==="room for one person") {
            discount = 0;
            totalPrice = (stay*priceFor1) - discount;
                if (review==="positive") {
                    totalDiscount = 0.25*totalPrice;
                    finalPrice= totalPrice + totalDiscount;
                } else if (review==="negative") {
                    totalDiscount = 0.1*totalPrice;
                    finalPrice = totalPrice - totalDiscount;
                }
    } else if (type==="apartment") {
        if (stay<10) {
            discount = 0.3* (stay*priceAp);
            totalPrice = (stay*priceAp) - discount;
            if (review==="positive") {
                totalDiscount = 0.25*totalPrice;
                finalPrice= totalPrice + totalDiscount;
            } else if (review==="negative") {
                totalDiscount = 0.1*totalPrice;
                finalPrice = totalPrice - totalDiscount;
            }
        }else if (stay>=10 && stay<=15) {
            discount= 0.35* (stay*priceAp);
            totalPrice = (stay*priceAp) - discount;
            if (review==="positive") {
                totalDiscount = 0.25*totalPrice;
                finalPrice= totalPrice + totalDiscount;
            } else if (review==="negative") {
                totalDiscount = 0.1*totalPrice;
                finalPrice = totalPrice - totalDiscount;
            }
        } else if (stay>15) {
            discount= 0.5* (stay*priceAp);
            totalPrice = (stay*priceAp) - discount;
            if (review==="positive") {
                totalDiscount = 0.25*totalPrice;
                finalPrice= totalPrice + totalDiscount;
            } else if (review==="negative") {
                totalDiscount = 0.1*totalPrice;
                finalPrice = totalPrice - totalDiscount;
            }
        }
    }else if (type==="president apartment") {
        if (stay<10) {
            discount = 0.1*(stay*pricePresAp);
            totalPrice = (stay*pricePresAp) - discount;
            if (review==="positive") {
                totalDiscount = 0.25*totalPrice;
                finalPrice= totalPrice + totalDiscount;
            } else if (review==="negative") {
                totalDiscount = 0.1*totalPrice;
                finalPrice = totalPrice - totalDiscount;
            }
        }else if (stay>=10 && stay<=15) {
            discount= 0.15* (stay*pricePresAp);
            totalPrice = (stay*pricePresAp) - discount;
            if (review==="positive") {
                totalDiscount = 0.25*totalPrice;
                finalPrice= totalPrice + totalDiscount;
            } else if (review==="negative") {
                totalDiscount = 0.1*totalPrice;
                finalPrice = totalPrice - totalDiscount;
            }
        } else if (stay>15) {
            discount=0.2*(stay*pricePresAp)
            totalPrice = (stay*pricePresAp) - discount;
            if (review==="positive") {
                totalDiscount = 0.25*totalPrice;
                finalPrice= totalPrice + totalDiscount;
            } else if (review==="negative") {
                totalDiscount = 0.1*totalPrice;
                finalPrice = totalPrice - totalDiscount;
            }
        }
    }
    console.log (finalPrice.toFixed(2))
} 

solve("30",
"president apartment",
"negative")

