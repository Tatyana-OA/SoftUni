function pets (dogCount,otherPets) {
    let dogFoodPrice= Number(dogCount*2.5);
    let otherPetsPrice= Number(otherPets*4);

    totalSum= dogFoodPrice+otherPetsPrice;

    console.log(`${totalSum} lv.`)
    
}
pets("5", "4")
