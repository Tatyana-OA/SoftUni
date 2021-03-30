function company(input){
    let companyObj = {}
    for (let line of input) {
        let [company,id] = line.split(" -> ")
        //console.log(eachLine)
        if (!companyObj.hasOwnProperty(company)) {
            companyObj[company]= []
        }   if (!companyObj[company].includes(id)) {
            companyObj[company].push(id)
        }
    }
let sorted=Object.entries(companyObj)
sorted.sort((a,b)=> {
    return a[0].localeCompare(b[0])
})

sorted.forEach(element => {
    let company = element.shift()
    console.log(company)
        for (let i=0; i<element.length; i++) {
            let ids = element[i]
                for (let sth of ids) {
                    console.log(`-- ${sth}`)
                }
           
        }
});

}
