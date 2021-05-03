function crew(input) {
    //start by checking if worker is dizzy
    if (input.dizziness) {
        // .dizziness because this is the exact word for the key
        // [] would have done if it were a variable
        // change levelofhydrated by the formula 
        //!! += because there could be an initial level we don't want to overwrite
        input.levelOfHydrated+=0.1*input.weight*input.experience;
        //once hydrated, change diziness status 
        input.dizziness=false
    
    }
    return input

}
// console.log(crew({ weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true }
//   ))
  console.log(crew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ))
