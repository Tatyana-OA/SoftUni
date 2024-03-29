const {model, Schema} = require('mongoose')


const schema = new Schema({
    username: {type:String, required:true},
    hashedPassword: {type:String, required:true},
	likedPlays:  [{type: Schema.Types.ObjectId, ref: 'Play', default: []}]
})

module.exports = model('User', schema)