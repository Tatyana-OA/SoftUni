
//DATABASE OPERATIONS in service
    //create user
    //find user by username
    //find user by email -> project specific

const User = require('../models/User')

async function createUser(username,hashedPassword) {

    const user = new User({
        username,
        hashedPassword,
        enrolledCourses: []
    })
    
    await user.save();
    return user; // to use in middleware or elsewhere in app
}

async function getUserByUserName (username) {
    const pattern = new RegExp(`^${username}$`, 'i')
    const user = await User.findOne({username: {$regex: pattern}})
    
    return user;
}


//TODO add other functions that find a user

module.exports = {
    createUser,
    getUserByUserName
}