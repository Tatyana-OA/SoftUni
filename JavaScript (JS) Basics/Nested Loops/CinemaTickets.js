function solve (input) {
    let standardTicket = 0; //count
    let studentTicket = 0; //count
    let kidsTicket = 0; //count
    let index=0; 
    let inputLine = input[index++] 

    while (inputLine!=="Finish") { 
        let movieName = inputLine; 
        let ticketsCount = Number(input[index++]) 
        let availableTickets = ticketsCount; 
        let ticketType=input[index++] 
        while (ticketType!=="End") {
            if (ticketType==="student") { 
                studentTicket++
            } else if (ticketType==="standard") {
                standardTicket++
            } else {
                kidsTicket++
            }
            availableTickets-- 
            if (availableTickets===0) {
                break; 
            }
            ticketType=input[index++] 
        }
        let boughtTickets = ticketsCount-availableTickets;
        let percentage= (boughtTickets/ticketsCount)*100;
        console.log (`${movieName} - ${percentage.toFixed(2)}% full.`);
        inputLine = input[index++] 
    }
let totalTickets = studentTicket+standardTicket+kidsTicket;
console.log (`Total tickets: ${totalTickets}`)
let studentPercent = (studentTicket / totalTickets * 100)
let kidsPercent = (kidsTicket / totalTickets * 100)
let standardPercent = (standardTicket / totalTickets * 100)
console.log(`${studentPercent.toFixed(2)}% student tickets.`);
console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);


}

solve ((["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
)
