function extract(str){
let iterString = str.split("\\")
let fileAllInfo = iterString.pop()
let lastDot = fileAllInfo.lastIndexOf(".")
let name = fileAllInfo.substring(0,lastDot)
let extension= fileAllInfo.substring(lastDot+1,fileAllInfo.length)
console.log(`File name: ${name}`)
console.log(`File extension: ${extension}`)
}
