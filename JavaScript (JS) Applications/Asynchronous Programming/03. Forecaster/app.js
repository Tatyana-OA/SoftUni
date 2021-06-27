function attachEvents() {
    console.log("TODO...");
    document.getElementById('submit').addEventListener('click',getWeather)
    
    
}

async function getWeather () {
    document.getElementById('upcoming').innerHTML=''
    document.getElementById('current').innerHTML=''
    const symbols = {
"Sunny": "☀",
"Partly sunny": "⛅",
"Overcast": "☁",
"Rain": "☂",
"Degrees": "°"

    }
        const divForecast = document.getElementById('forecast')
        const inputField = document.getElementById('location')

        try {

        const url = `http://localhost:3030/jsonstore/forecaster/locations/`
        const response = await fetch(url)
        const data = await response.json()
        let requestedCode;
        data.forEach(element => {
        if (element.name.toLowerCase()==inputField.value.toLowerCase()) {
            requestedCode=element.code
        }       

        });
       
        
        let [todayData,upcomingData] = await Promise.all([
            (await fetch(`http://localhost:3030/jsonstore/forecaster/today/${requestedCode}`)).json(),
            (await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${requestedCode}`)).json()
        ])
        
        let name = todayData.name;
        let condition = todayData.forecast.condition
        let LowHigh = `${todayData.forecast.low}` + symbols["Degrees"]+`/`+ `${todayData.forecast.high}` +symbols["Degrees"]
    
        //creating elements
        let forecasts = createElement('div','','forecasts')
        let conditionSymbol = createElement('span',symbols[condition],'condition symbol')
        let conditionSpan = createElement('span','','condition')
        let forecastName = createElement('span',name,'forecast-data')
        let forecastLowHigh = createElement('span',LowHigh,'forecast-data')
        let forecastCondition = createElement('span',condition,'forecast-data')
        //appending

        document.getElementById('current').appendChild(forecasts)
        forecasts.appendChild(conditionSymbol)
        forecasts.appendChild(conditionSpan)
        conditionSpan.appendChild(forecastName)
        conditionSpan.appendChild(forecastLowHigh)
        conditionSpan.appendChild(forecastCondition)

        //upcoming
        let upcomingInfo= createElement('div','','forecast-info')
        document.getElementById('upcoming').appendChild(upcomingInfo)
        upcomingData.forecast.forEach(day => {
            let upCondition = day.condition
            let upLowHigh = `${day.low}${symbols['Degrees']}/${day.high}${symbols['Degrees']}`
            let upSymbol = symbols[upCondition]
            let upcomingSpan = createElement('span','','upcoming')
            let upcomingSymbol = createElement('span',upSymbol,'symbol')
            let upcomingLowHigh = createElement('span',upLowHigh,'forecast-data')
            let upcomingCondition = createElement('span',upCondition,'forecast-data')
            upcomingInfo.appendChild(upcomingSpan)
            upcomingSpan.appendChild(upcomingSymbol)
            upcomingSpan.appendChild(upcomingLowHigh)
            upcomingSpan.appendChild(upcomingCondition)
        })
       
        console.log(name,condition,LowHigh)
        console.log(upcomingData)
        divForecast.style.display="block"
    }
    catch(err) {
        document.querySelector('#upcoming').innerHTML=''
        document.querySelector('#current').innerHTML=''
        divForecast.style.display="block"
        document.querySelector('#current').appendChild(createElement('span','ERROR'))
       
    }
   


}

attachEvents();

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
