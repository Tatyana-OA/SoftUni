function attachEventsListeners() {

let main = document.querySelector('main')
main.addEventListener('click', onClick)



function onClick(event) {
    if (event.target.value === 'Convert') {
let inputDay = document.querySelector('#days')
let inputHours = document.querySelector('#hours')
let inputMinutes = document.querySelector('#minutes')
let inputSeconds = document.querySelector('#seconds')
       
           let days = Number(inputDay.value);
           let hours = Number(inputHours.value)
           let minutes = Number(inputMinutes.value)
           let seconds = Number(inputSeconds.value)
           if (days) {
            inputHours.value = 24*days
            inputMinutes.value = 1440*days
            inputSeconds.value = 86400*days
           }
           
           else if (hours) {
            inputDay.value = hours/24
            inputMinutes.value = hours * 60
            inputSeconds.value = hours * 3600
           }
           else if (minutes) {
            inputHours.value = minutes/60
            inputSeconds.value = minutes * 60
            inputDay.value =  minutes / 1440
           }
           else if (seconds) {
            inputHours.value = seconds/3600
            inputDay.value = seconds / 86400
            inputMinutes.value = seconds / 60
           }
           
       
    }
}

}
