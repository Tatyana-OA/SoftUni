function solve(employeesStr,criteria) {
    let employeesData = JSON.parse(employeesStr)
    let result = []
    let [criteriaKey,criteriaValue] = criteria.split("-")    
    employeesData.forEach(element => {
        if (element[criteriaKey]==criteriaValue) {
            let name = element.first_name
            let lastName = element.last_name
            let email = element.email
            let resultString = `${name} ${lastName} - ${email}`
            result.push(resultString)
        }
    });

    for (let i=0; i<result.length; i++) {
        console.log(`${i}. ${result[i]}`)
    }

}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')
