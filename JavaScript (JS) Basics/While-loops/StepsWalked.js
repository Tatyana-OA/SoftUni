function solve(input) {

let goal = 10000;
let index=0; // counter
let command=input[index++];
let stepsWalked=0;

while (command!=="Going home") {
let stepsLogged = Number(command)
command=input[index++];
stepsWalked+=stepsLogged;
 
if (stepsWalked>=goal) {
    let overgoal = stepsWalked-goal;
    console.log (`Goal reached! Good job!`)
    console.log (`${overgoal} steps over the goal!`)
    break;
} 

} 
if (command==="Going home") { 
    let finalSteps = Number(input[input.length-1]) 
    stepsWalked+=finalSteps;
    if (stepsWalked<goal) { 
    let stepsmore = goal - stepsWalked;
    console.log (`${stepsmore} more steps to reach goal.`)
} else if (stepsWalked>goal) { 
    let stepsOver = stepsWalked-goal;
    console.log (`Goal reached! Good job!`)
    console.log (`${stepsOver} steps over the goal!`)
}
}
}
solve(["125",
"250",
"4000",
"30",
"2678",
"4682"])
