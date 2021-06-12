function request (input) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    let uriRegExp = /^[a-zA-Z0-9\.]+$/gm
    let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0" ]
    let messageRegExp = /[<>\\&'"]/gm
    if (!validMethods.includes(input.method) || input.method===undefined) {
        throw new Error (`Invalid request header: Invalid Method`)
    }
    let uriOne = uriRegExp.test(input.uri)
    let uriTwo = input.uri===""
    if (!uriOne || uriTwo || input.uri===undefined) {
        throw new Error (`Invalid request header: Invalid URI`)
    }
    if (!validVersion.includes(input.version)|| input.version===undefined) {
        throw new Error (`Invalid request header: Invalid Version`)
    }
    if (messageRegExp.test(input.message) || input.message===undefined) {
        throw new Error (`Invalid request header: Invalid Message`)
    }
    
    return input
    
}
// console.log(request({
//     method: 'POST',
//     version: 'HTTP/2.0',
//     message: 'rm -rf /*'
// }))
console.log(request({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}))

//   console.log(request({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   ))
