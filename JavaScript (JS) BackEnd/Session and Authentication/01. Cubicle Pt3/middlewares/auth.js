// validation of data and calling of user service
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { COOKIE_NAME, TOKEN_SECRET } = require('../config') //using it from config file with some const variables
const userService = require('../services/user')


module.exports = () => (req,res,next) => {

    
    // middleware which tackles login and register using userService
    req.auth = {
        register,
        login,
        logout
    }
    // knowing if user is logged in or not
    if (readToken(req)){
        next()
    } 
   

    async function register({username, password, repeatPassword}) {
        if (username=='' || password=="" || repeatPassword == "") {
            throw new Error("All fields are required!")
        } else if (password!=repeatPassword) {
            throw new Error('Passwords do not match~')
        } 

        const hashedPassword = await bcrypt.hash(password,10) //password, saltRounds
        const user = await userService.createUser(username,hashedPassword);
        // user gets logged in after registration
       req.user = createToken(user) 
    }

    async function login({username,password}) {
        const user = await userService.getUserByUsername(username);
        if (!user) {
            throw new Error('Wrong username or password')
        }
        else {
            const isMatch = await bcrypt.compare(password, user.hashedPassword)
            if (!isMatch) {
                throw new Error('Wrong username or password')
            } else {   
                // attaching userModel to the session
                req.user = createToken(user)
            }
        }
    }

    async function logout(){
        res.clearCookie(COOKIE_NAME)
     
    }


    function createToken(user) {
    //create user session using jwt; create object with info we need
    // info is taken from database query line 16
    // cookie is set to response. name of cookie is Session_data, value is token, httpOnly -> not accessible in inspector
    // attach user model to request
    const userViewModel = {_id: user._id, username: user.username}
    const token = jwt.sign(userViewModel, TOKEN_SECRET)
    res.cookie(COOKIE_NAME, token, {httpOnly:true})

    return userViewModel
    }
    
    function readToken(req) {
        const token  = req.cookies[COOKIE_NAME]
        if (token) {
            try {
                const userData = jwt.verify(token, TOKEN_SECRET)
                req.user = userData
                //req.locals -"magic variable" that handlebars reads and accesses in template
                res.locals. user = userData
                console.log('Known user', userData.username)
                
            }
            catch(err) {
                // ending user session this way
                res.clearCookie(COOKIE_NAME)
                res.redirect('/auth/login')
                return false;
                
            }

        }
        return true;
    }
}

