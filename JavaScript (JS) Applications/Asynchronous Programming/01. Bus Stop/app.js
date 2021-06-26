 async function getInfo() {
    //console.log("TODO...");
    const inputField = document.getElementById('stopId')
        const displayBanner = document.getElementById('stopName')
        const ulSection = document.getElementById('buses')
        const url = `http://localhost:3030/jsonstore/bus/businfo/` + `${inputField.value}`
    try {
        
        const response = await fetch(url)
        const data = await response.json()
        displayBanner.textContent=data.name
        ulSection.innerHTML=''
        Object.entries(data.buses).forEach(element => {
            let [bus,arrivesIn] = element
            ulSection.appendChild(createElement('li',`Bus ${bus} arrives in ${arrivesIn} minutes`))
        });
        
        inputField.value =''
    }
    catch (err) {
        ulSection.innerHTML=''
        displayBanner.textContent=`Error`
    }


    function createElement(type,textContent,className) {
        let element = document.createElement(type)
        if (textContent) {
            element.textContent = textContent
        }
                
        if (className) {
            element.className = className
        }
        
        return element;
        }


}
