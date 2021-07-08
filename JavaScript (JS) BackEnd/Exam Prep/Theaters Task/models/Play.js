const {model, Schema} = require('mongoose')


const schema = new Schema({
    title: {type:String, required: [true, 'Title is required']},
    description: {type:String, required:[true, 'Description is required'], maxLength: [50, 'Description must be less than 50 characters']},
    imageUrl: {type:String, required:[true, 'ImageUrl is required']},
    public: {type:Boolean, required:[true, 'Public is required'], default: false},
    createdAt: {type:Date, required:true, default:Date.now},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    usersLiked: [{type: Schema.Types.ObjectId, ref: 'User', default: []}]
})

module.exports = model('Play', schema)