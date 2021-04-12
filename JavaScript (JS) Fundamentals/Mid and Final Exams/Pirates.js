function ahoy(input) {
  //until sail -> cities & population + gold
  let townsInfo = {};
  let counter = 0;
  for (line of input) {
    counter++;
    if (line === "Sail") {
      break;
    }
    let [townName, population, gold] = line.split("||");

    if (!townsInfo.hasOwnProperty(townName)) {
      townsInfo[townName] = {
        population,
        gold,
      };
    } else {
      let existingGold = Number(townsInfo[townName].gold);
      existingGold += Number(gold);
      townsInfo[townName].gold = existingGold;
      let existingPopulation = Number(townsInfo[townName].population);
      existingPopulation += Number(population);
      townsInfo[townName].population = existingPopulation;
    }
  }
  input.splice(0, counter);

  for (actionLine of input) {
    if (actionLine === "End") {
      break;
    }
    let [action, townName, ...args] = actionLine.split("=>");
    if (action === `Plunder`) {
      let denizensKilled = Number(args[0]);
      let goldStolen = Number(args[1]);
      townsInfo[townName].population -= denizensKilled;
      townsInfo[townName].gold -= goldStolen;
      if (townsInfo[townName].population > 0 || townsInfo[townName].gold > 0) {
        console.log(
          `${townName} plundered! ${goldStolen} gold stolen, ${denizensKilled} citizens killed.`
        );
      }
      if (
        townsInfo[townName].population == 0 ||
        townsInfo[townName].gold == 0
      ) {
        console.log(`${townName} has been wiped off the map!`);
        delete townsInfo[townName];
      }
      // console.log(townsInfo)
    } else if (action === `Prosper`) {
      let goldAcquired = Number(args[0]);
      if (goldAcquired < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        let currentGold = Number(townsInfo[townName].gold);
        currentGold += Number(goldAcquired);
        townsInfo[townName].gold = currentGold;
        console.log(
          `${goldAcquired} gold added to the city treasury. ${townName} now has ${currentGold} gold.`
        );
      }
    }
  }
  let toArray = Object.entries(townsInfo);
  let sorted = toArray.sort((a, b) => {
    let townA = a[0];
    let townB = b[0];
    let goldA = Object.values(a[1])[1];
    let goldB = Object.values(b[1])[1];
    return goldB - goldA || townA - townB;
  });
  if (sorted.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`
    );
    for (item of sorted) {
      let population = Object.values(item[1])[0];
      let gold = Object.values(item[1])[1];
      console.log(
        `${item[0]} -> Population: ${population} citizens, Gold: ${gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }

  // store in an object
  //after sail, until end -> events
  // plunder -> kill and steal gold
  //prosper -> treasury of town increases
  // after end -> gold in desc order OR name in asc
}
ahoy([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
// ahoy ([
//     'Nassau||95000||1000',
//     'San Juan||930000||1250',
//     'Campeche||270000||690',
//     'Port Royal||320000||1000',
//     'Port Royal||100000||2000',
//     'Sail',
//     'Prosper=>Port Royal=>-200',
//     'Plunder=>Nassau=>94000=>750',
//     'Plunder=>Nassau=>1000=>150',
//     'Plunder=>Campeche=>150000=>690',
//     'End'
//   ])
