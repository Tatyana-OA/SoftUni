function extract(elementId) {
let pattern =/\((.+?)\)/gm;
let output = []
let toCheck = document.getElementById(elementId).textContent;
let result = pattern.exec(toCheck)
while (result!=null) {
    output.push(result[1])
    result = pattern.exec(toCheck)
}
return output.join("; ")

}
