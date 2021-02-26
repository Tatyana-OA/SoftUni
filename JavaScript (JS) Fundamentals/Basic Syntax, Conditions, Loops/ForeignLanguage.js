function solve (countryName){
    let language = "";
    if (countryName==="England" || countryName==="USA") {
        language="English";
        console.log (language)
    } else if (countryName==="Argentina" || countryName==="Spain" || countryName==="Mexico") {
        language = "Spanish"
        console.log (language)
    } else {
        console.log ("unknown")
    }
} solve ("Bulgaria")
