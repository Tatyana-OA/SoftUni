//general request function
export const settings = {
    host: ''
}
async function request(url,options) {
    try {
        const response = await fetch (url,options)
        // must check if response is Ok
        if (response.ok == false ) {
            const error = await response.json()
            throw new Error(error.message)
        }
        try {
            // if the response is OK but the body is empty; esp. for logout
            const data = await response.json()
            return data;
        }
        catch (err){
            return response;
        }
      
    }
    catch (err) {
        alert (err.message)
        // error should be thrown so if request function is called and there's an error, it will stop working
        throw err;
    }
}

// create a utility function that assembles the necessary options
function getOptions(method = 'get',body) {
    // default method is get
    const options = {
        method,
        headers: {}
    }
    // if the CRUD operation is authorized
    const token = sessionStorage.getItem('authToken')
    if (token!=null) {
        options.headers['X-Authorization'] = token
    }
    // if the CRUD operation has a data body (e.g. post)
    if (body) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body)
    }
    return options;

}

// create four main CRUD functions: get, put, post, delete
// function request will be used as a base for each function and will be modified to serve its purpose
// getOptions will be used as the option part with or without a body depending on the method
export async function get(url) {
    return await request(url, getOptions());
}
export async function post(url, data) {
    return await request(url, getOptions('post',data))
}
export async function put(url, data) {
    return await request(url, getOptions('put',data))
}
export async function del(url) {
    return await request(url, getOptions('delete'))
}

// login and register

export async function login(email,password) {
    const result = await post(settings.host + '/users/login', {email,password})
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken',result.accessToken)
    sessionStorage.setItem('userId',result._id)

    return result;
}
export async function register(email,password) {
    const result = await post(settings.host + '/users/register', {email,password})
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken',result.accessToken)
    sessionStorage.setItem('userId',result._id)

    return result;
}
export async function logout() {
    const result = await get(settings.host + '/users/logout')
    sessionStorage.removeItem('email', result.email);
    sessionStorage.removeItem('authToken',result.accessToken)
    sessionStorage.removeItem('userId',result._id)

    return result;
}