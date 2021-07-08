const {model, Schema} = require('mongoose')


const schema = new Schema({
    title: {type:String, required: [true, 'Title is required'], minLength: [4, 'Title must be at least 4 characters']},
    description: {type:String, required:[true, 'Description is required'], maxLength: [50, 'Description must be less than 50 characters']},
    imageUrl: {type:String, required:[true, 'ImageUrl is required'], match: [/^https?/, 'Please fill a valid URL address']},
    duration: {type:String, required:[true, 'Duration is required']},
    createdAt: {type:Date, required:true, default:Date.now},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    usersEnrolled: [{type: Schema.Types.ObjectId, ref: 'User', default: []}]
})

module.exports = model('Course', schema)