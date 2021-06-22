function solve(arr,criterium) {
    let result = []
    class Ticket {
        constructor(destination,price,status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status
        }
    }

    arr.forEach(element => {
        let [destination,price,status] = element.split("|")
        let ticketInfo = new Ticket(destination,price,status)
        result.push(ticketInfo)
    });
    //console.log(result)

    let possibleCriteria = {
        'destination': (a,b) => a.destination.localeCompare(b.destination),
        'price': (a,b) => a.price - b.price,
        'status': (a,b) => a.status.localeCompare(b.status)
    }

    return result.sort(possibleCriteria[criterium])
    

}
// console.log(solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ))
console.log((solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
)))
