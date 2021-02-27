function solve (dayType, age) {
    let personAge = Number(age);
    let price = 0;
    if (personAge>=0 && personAge<=18) {

        switch(dayType) {
            case "Weekday":
            price = 12;
            break;
            case "Weekend":
            price = 15;
            break;
            case "Holiday":
            price = 5;
            break;

        }
        console.log (price + "$")
    }else if (personAge>18 && personAge<=64){
        switch(dayType) {
            case "Weekday":
            price = 18;
            break;
            case "Weekend":
            price = 20;
            break;
            case "Holiday":
            price = 12;
            break;

        }
        console.log (price + "$")
    } else if (personAge>64 && personAge<=122){
        switch(dayType) {
            case "Weekday":
            price = 12;
            break;
            case "Weekend":
            price = 15;
            break;
            case "Holiday":
            price = 10;
            break;

        }
        console.log (price + "$")
    }

    else {
        console.log ("Error!")
    }
} solve ('Holiday', 5
)
