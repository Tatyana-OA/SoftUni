function solution() {

    let recipeLibrary = {
        Apple: {
            carb: 1,
            flovour: 2
        },
        Lemonade: {
            carb: 10,
            flavour: 20
        },
        Burger: {
            carb: 5,
            flavour: 3,
            fat: 7
        },
        Eggs: {
            protein: 5,
            fat: 1,
            flavour:3
        },
        Turkey: {
            protein: 10,
            carb: 10,
            fat: 10,
            flavour: 10
        },
        protein: 0,
        carb: 0,
        fat: 0,
        flavour:0,
        restock,
        prepare,
        report
    }

    function restock(microelement,quantity) {
        recipeLibrary[microelement]+=Number(quantity)
    }
    function prepare(recipe,quantity) {
        recipe = recipeLibrary[recipe]

    }
    function report() {

    }

}
solution()


let manager = solution();
manager("restock flavour 50");  // Success
manager("prepare lemonade 4");  // Error: not enough carbohydrate in stock
