function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      //   TODO:
      let restaurantLog = {}
      let input = document.querySelector(`textarea`).value
      let myRegExp = /\"(.+?)\"/gm
      let match = myRegExp.exec(input)
      let restStats = []
      let personInfo = {}
      while (match!=null) {
         let restaurantInfo = match[1]
         let [restName,...args] = restaurantInfo.split(" - ")
         args = args.toString().split(", ")
         for (el of args) {
            let [person,salary] = el.split(" ")
            personInfo[person] = salary;
            restStats.push(personInfo) 
            personInfo = {}
         }
         if (restaurantLog[restName]==undefined) {
            restaurantLog[restName] = restStats
         } else {
            let currentStats = restaurantLog[restName]
            restaurantLog[restName] = currentStats.concat(restStats)
         }
         
         restStats = []
         match = myRegExp.exec(input)
        
      }
      //console.log(restaurantLog)
      
      let averageSalary = 0;
      let salariesArray = [];
      let sortingStuff = Object.entries(restaurantLog)
      for (let el of sortingStuff) {
         for (let iter of el[1]) {
            let aSalary = Number(Object.values(iter))
            salariesArray.push(aSalary)
         }
         
      averageSalary = salariesArray.reduce((acc,c) => acc+c/salariesArray.length,0)
      restaurantLog[el[0]].averageSalary = Number(averageSalary.toFixed(2))
      let biggestSalary = salariesArray.sort((a,b) => b-a)[0]
      restaurantLog[el[0]].biggestSalary = Number(biggestSalary)
      salariesArray = []
      }
   
      //console.log(restaurantLog)
      let averageSorting = Object.entries(restaurantLog)[1].sort((a,b) => {
      return b.averageSalary - a.averageSalary
       })

      console.log('vbiggest',averageSorting)
      let winnerRestaurant = averageSorting[0]

      document.querySelector('#bestRestaurant p').textContent = `Name: ${winnerRestaurant} Average Salary: ${restaurantLog[winnerRestaurant].averageSalary.toFixed(2)} Best Salary: ${restaurantLog[winnerRestaurant].biggestSalary.toFixed(2)}`
      let resultStringTwo = ''
      let sorted = averageSorting[1].sort((a,b) => {
       return  Number(Object.values(b)) - Number(Object.values(a))
      })
      console.log(sorted)
      for (let element of averageSorting[1]) {
         for (key in element) {
            resultStringTwo+=`Name: ${key} With Salary: ${element[key]} `
         }
      }

      document.querySelector('#workers p').textContent = resultStringTwo.trim()

      
   }
}
