// the service ONLY works on the model

const User = require('../models/User')


async function createUser(username,hashedPassword) {

    const user = new User({
        username,
        hashedPassword
    })
    console.log(user)

    await user.save()

    return user; // for further use in auth js. (line 25)

}
async function getUserByUsername(username) {
    // findOne within the table column username that == the username to lowerCase
    return await User.findOne({username: {$regex: username, $options: 'i'}})
}

module.exports = {
    createUser,
    getUserByUsername
}