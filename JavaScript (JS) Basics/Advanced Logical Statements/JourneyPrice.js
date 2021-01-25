function solve (budget, season) {
    budget=Number(budget);
    let accommodation;
    let place;
    let cost = 0;
    switch(season) {
    case "summer": //camp
    if (budget<=100) {
    cost=0.3*budget;
    accommodation="Camp";
    place="Bulgaria";
    } else if (budget<=1000) {
    cost=0.4*budget;
    accommodation="Camp";
    place="Balkans";
    } else if (budget>1000) {
        accommodation="Hotel";
        place="Europe";
    cost=0.9*budget;
    }
    break;
    case "winter": //hotel
    accommodation="Hotel";
    if (budget<=100) {
        cost=0.7*budget;
        place="Bulgaria";
        } else if (budget<=1000) {
        cost=0.8*budget;
        place="Balkans";
        } else if (budget>1000) {
        cost=0.9*budget;
        place="Europe";
        }
    break;
    }
    cost=cost.toFixed(2)
    console.log (`Somewhere in ${place}`)
    console.log (`${accommodation} - ${cost}`)
}
solve("75", "winter")
