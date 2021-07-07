const {Schema,model} = require('mongoose')


const schema = new Schema({
    //validation as an object
    name: {type:String, required:true},
    description: {type:String, required:true, maxLength:500},
    imageUrl: {type:String, required:true, match: /^https?:\/\//},
    difficulty: {type:Number, required:true, min:1, max:6},
    // each comment will be an Object ID which will have reference to a comment and can be populated
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    accessories: [{type: Schema.Types.ObjectId, ref: 'Accessory'}] 
})

// will create a collection CubeS once the 1st cube is created
module.exports = model('Cube',schema);