
//DATABASE OPERATIONS in service
    //create user
    //find user by username
    //find user by email -> project specific

const User = require('../models/User')

async function createUser(username,email,hashedPassword) {

    const user = new User({
        username,
        email,
        hashedPassword
    })
    
    await user.save();
    return user; // to use in middleware or elsewhere in app
}

async function getUserByUserName (username) {
    const pattern = new RegExp(`^${username}$`, 'i')
    const user = await User.findOne({username: {$regex: pattern}})
    
    return user;
}
async function getUserByEmail (email) {
    const pattern = new RegExp(`^${email}$`, 'i')
    const user = await User.findOne({email: {$regex: pattern}})
    
    return user;
}


//TODO add other functions that find a user

module.exports = {
    createUser,
    getUserByUserName,
    getUserByEmail
}