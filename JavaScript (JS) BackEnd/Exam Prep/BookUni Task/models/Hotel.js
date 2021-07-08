const {model, Schema} = require('mongoose')


const schema = new Schema({
    // using array to give value + error message
    name: {type:String, required: [true, 'All fields are required'], minLength: 4},
    city: {type:String, required:true, minLength: 3},
    imageUrl: {type:String, required:true, match: [/^https?/, 'Image must be a valid URL']},
    rooms: {type:Number, required:true, min:1, max:100},
    bookedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
    owner: {type:String, required:true}
})

module.exports = model('Hotel', schema)