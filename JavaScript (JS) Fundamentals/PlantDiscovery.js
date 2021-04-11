function plants(input){
    let n= Number(input.shift())
    let plantCollection = {};
    let flag = false;
    //let rating = [];
    let commandsValid = ['Exhibition', 'Rate', 'Update', 'Reset']

    
    for (let i = 0; i<n; i++) {   
        let line = input[i];
        let [plantName,rarity] = line.split("<->");
        rarity=Number(rarity);
        if (!plantCollection.hasOwnProperty(plantName)) {
            plantCollection[plantName]= {
                rarity,
                rating: [0],
            };
        } else {
             plantCollection[plantName].rarity=rarity;
           
        }
       
    }
    let commandsArr = input.slice(n,)
 //console.log(plantCollection)
   for (element of commandsArr) {
       let [command,...args]=element.split(": ")
       args=args.toString();
       if (command===`Exhibition`) {
           break;
       }else if (command===`Rate`) {
           let [plantName,ratingPoint]=args.split(" - ")
           ratingPoint = Number(ratingPoint);
           plantCollection[plantName].rating.push(ratingPoint)

       }else if (command===`Update`) {
        let [plantName,newRarity]=args.split(" - ")
        newRarity=Number(newRarity);
        plantCollection[plantName].rarity = newRarity;
       
       }else if (command===`Reset`) {
           let plantName = args;
           plantCollection[plantName].rating = [0];
           
       } 
       if (!commandsValid.includes(command)) {
           console.log(`error`);
           flag = true;
           break;
       }
     
   };

  // console.log(plantCollection)
  if (flag == false) {
    let toArr = Object.entries(plantCollection)
    for (line of toArr) {
     let plantName = line[0]
     let avgRating = 0;
        let ratingFinal = Object.values(line[1])[1]
        for (rate of ratingFinal) {
          
           avgRating+=rate;
        }
        if (ratingFinal.includes(0)&& ratingFinal.length>1) {
            // избягваме случая на началната нула, ако има вариант [0,0 ] заради началния масив (нужен е, за да не дава NAN при грешна команда)
         avgRating/=ratingFinal.length-1;
        } else {
         avgRating/=ratingFinal.length;
        }
       
        plantCollection[plantName].rating = avgRating
 
    }
   // console.log(toArr)
    let finalSort = toArr.sort((a,b) => {
        let rarityA = Object.values(a[1])[0]
        let rarityB = Object.values(b[1])[0]
        let avgRatingA = Object.values(a[1])[1]
        let avgRatingB = Object.values(b[1])[1]
        return rarityB - rarityA || avgRatingB - avgRatingA
    })
    console.log(`Plants for the exhibition:`)
    for (plant of finalSort) {
        let name = plant[0];
        let rarity = Object.values(plant[1])[0]
        let rating = Object.values(plant[1])[1]
        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${rating.toFixed(2)}`)
    }
   // console.log(finalSort)
  
  }
   
}

plants([3,
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition',
    ])

    // plants([2,
    //     'Candelabra<->9',
    //     'Oahu<->10',
    //     'Rate: Oahu - 7',
    //     'Rate: Candelabra - 8',
    //     'Exhibition',
    //     ])
