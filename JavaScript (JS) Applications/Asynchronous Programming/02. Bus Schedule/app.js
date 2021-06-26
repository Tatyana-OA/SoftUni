function solve() {
const infoBanner = document.querySelector('.info')
const departBtn = document.getElementById('depart')
const arriveBtn = document.getElementById('arrive')

let nextStop = {
    next: "depot"
  }


   async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/` + `${nextStop.next}`
        const response = await fetch(url)
        const data = await response.json()
        nextStop = data
        infoBanner.textContent = `Next stop ${nextStop.name}`
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

   async function arrive() {
        infoBanner.textContent = `Arriving at ${nextStop.name}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
