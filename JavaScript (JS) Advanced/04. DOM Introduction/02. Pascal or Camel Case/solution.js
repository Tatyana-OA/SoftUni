function solve(stringOne, stringTwo) {
  //TODO...
  stringOne = document.getElementById('text').value
  stringTwo = document.getElementById('naming-convention').value
  let result = []
  stringOne= stringOne.split(" ").map(x => x.toLowerCase())
  console.log(stringOne)
  if (stringTwo==='Camel Case') {
    result.push(stringOne[0])
    for (let i=1; i<stringOne.length; i++) {
      let word = stringOne[i]
      let capitalLetter = word[0].toUpperCase();
      word = capitalLetter+word.slice(1)
      result.push(word)
    }
  }else if (stringTwo==='Pascal Case') {
    for (let i=0; i <stringOne.length; i++) {
      let word = stringOne[i]
      let capitalLetter = word[0].toUpperCase();
      word = capitalLetter+word.slice(1)
      result.push(word)
    }
  }else {
    result.push('Error!')
  }
  let final = document.getElementById('result')
  final.textContent = result.join("")
}
