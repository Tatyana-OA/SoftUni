function extractText() {
    let result = []
    let liItems = document.getElementsByTagName('li')
    for (item of liItems) {
        let textContentofLi = item.textContent;
        result.push(textContentofLi)
    }
    
    document.getElementById('result').value=result.join("\n")
  

}
