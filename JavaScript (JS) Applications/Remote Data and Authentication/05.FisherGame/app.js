
function attachEvents() {
    console.log('TODO...');
    document.querySelector('.load').addEventListener('click',loadCatches)
    const allCatches = document.getElementById('catches')
    let [anglerInput,weightInput,speciesInput,locationInput,baitInput,captureInput] =document.querySelectorAll('#addForm input')
    if (sessionStorage.authToken) {
        document.querySelector('.add').addEventListener('click',addCatch)
        document.querySelector('.add').disabled = false;
        document.getElementById('guest').style.display = "none"
        
    }
    let availableEntries = []
   // const loginForm = document.querySelectorAll('form')
   //console.log(loginForm)    
   allCatches.innerHTML=''
 
    async function loadCatches()  {
        allCatches.innerHTML=''
        const request = await fetch('http://localhost:3030/data/catches')
        const data = await request.json()
        Object.values(data).forEach(singleCatch => {
            console.log(singleCatch)
            let catchElement = `<div class="catch" id="${singleCatch.angler}">
            <label>Angler</label>
            <input type="text" class="angler" value="${singleCatch.angler}" />
            <hr>
            <label>Weight</label>
            <input type="number" class="weight" value="${singleCatch.weight}" />
            <hr>
            <label>Species</label>
            <input type="text" class="species" value="${singleCatch.species}" />
            <hr>
            <label>Location</label>
            <input type="text" class="location" value="${singleCatch.location}" />
            <hr>
            <label>Bait</label>
            <input type="text" class="bait" value="${singleCatch.bait}" />
            <hr>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${singleCatch.captureTime}" />
            <hr>
            <button disabled class="update">Update</button>
            <button disabled class="delete">Delete</button>
        </div>`
        
        
        allCatches.innerHTML +=catchElement
        
        });
        if (sessionStorage.authToken) {
            const request = await fetch('http://localhost:3030/data/catches')
            const data = await request.json()
            Array.from(data).forEach(entry => {
                if (entry._ownerId==sessionStorage.userId)
                availableEntries.push(entry)
            })
    Array.from(document.querySelectorAll('.catch .angler')).forEach(domEntry => {
        for (available of availableEntries) {
            if (available.angler == domEntry.value) {
                domEntry.parentNode.querySelector('.update').disabled = false;
                domEntry.parentNode.querySelector('.update').addEventListener('click',onUpdate)
                domEntry.parentNode.querySelector('.delete').disabled = false;
                domEntry.parentNode.querySelector('.delete').addEventListener('click',onDelete)
                
            }
        }
    })
    
        }
    }

    async function addCatch(e) {
        allCatches.innerHTML=''
    
    const postRequest = await fetch('http://localhost:3030/data/catches',{
        method: 'post',
        headers: {'Content-type': 'application/json', 'X-Authorization':sessionStorage.authToken},
        body: JSON.stringify({
            angler:anglerInput.value, 
            weight: weightInput.value,
            species: speciesInput.value,
             location: locationInput.value,
             bait:baitInput.value,
             captureTime: captureInput.value
        })
    })
    const response = await postRequest;
    if (response.ok) {
       
    loadCatches()
    return alert('Entry added successfully')
    
    } else {
        return alert(`${response.message}`)
    }
    Array.from(document.querySelectorAll('#addForm input')).forEach(field => field.value='')
}
 async function onDelete(e) {
     let id;
    for (available of availableEntries) {
        if (available.angler==e.target.parentNode.querySelector('.angler').value) {
            id = available._id
        }
    }
e.target.parentNode.remove()
let url = `http://localhost:3030/data/catches/${id}`

const response = await fetch(url,{
    method: 'delete',
    headers: {'Content-type': 'application/json', 'X-Authorization':sessionStorage.authToken},
})
console.log(await response.json())
return alert('Entry deleted successfully')


 }
 async function onUpdate(e) {
    console.log(`works`)
    let id;
    for (available of availableEntries) {
        if (e.target.parentNode.id==available.angler) {
            id = available._id
            console.log(available.angler)
            console.log(e.target.parentNode.querySelector('.angler').value)
        }
    }
    console.log(id)
let url = `http://localhost:3030/data/catches/${id}`
console.log(url)
let [anglerInputPUT,weightInputPUT,speciesInputPUT,locationInputPUT,baitInputPUT,captureInputPUT] = e.target.parentNode.querySelectorAll('input')
const response = await fetch(url,{
    method: 'put',
    headers: {'Content-type': 'application/json', 'X-Authorization':sessionStorage.authToken},
    body: JSON.stringify({
        angler:anglerInputPUT.value, 
        weight: weightInputPUT.value,
        species: speciesInputPUT.value,
         location: locationInputPUT.value,
         bait:baitInputPUT.value,
         captureTime: captureInputPUT.value
    })
})
console.log(await response.json())
    loadCatches()
    return alert('Entry updated successfully')
     }
}

attachEvents();

