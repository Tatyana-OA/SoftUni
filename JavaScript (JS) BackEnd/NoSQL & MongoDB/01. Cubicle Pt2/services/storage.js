//will be middleware - link between router and action controller
//will act as decoration to req
const Cube = require('../models/Cube')
const Comment = require('../models/Comment')
const Accessory = require('../models/Accessory')

let data = {};
/* Data Model Structure
{id: {
    "name": sth,
    "description": sth,
    "imageUrl": sth,
    "difficulty": sth
}}
*/

async function init() {

   
    return (req, res, next) => {
         //middleware
        req.storage = {
            getAll,
            getById,
            create,
            edit,
            createComment,
            createAccessory,
            getAllAccessories,
            attachSticker
        }
        // from express
        next()
    }

}

async function getAll(query) {
    // empty object that will get params step by step via ifs. Goal is to work with only one .find
    const options = {}
    
    //filter cubes by query for SEARCH if any

    if (query.search) {
        options.name = {$regex:query.search, $options: 'i'}
      
    }
    if (query.from) {
        options.difficulty = {$gte: Number(query.from)} // greater than or equal to
  
    }
    if (query.to) {
        options.difficulty = options.difficulty || {}
        options.difficulty.$lte = Number(query.from)
    } // greater than or equal to
    

    const cubes = Cube.find(options).lean() // returns all cubes in database w/o methods from mongoose
    return cubes;
}

async function getById(id) {
    const cube = await Cube.findById(id).populate('comments').populate('accessories').lean(); // lean to return only data, no methods
    if (cube) {
        return cube;
    } else {
        return undefined;
    }
    
}

async function create(cube) {
    const record = new Cube(cube)
    await record.save();
}
async function edit(id,cube) {
    const existing = await Cube.findById(id)
    // if there is no such cube
    if (!existing) {
        throw new ReferenceError('No such ID in database.')
    }
    Object.assign(existing, cube)
    return existing.save();

}
async function createComment(cubeId,comment) {
    const cube = await Cube.findById(cubeId)
    // if there is no such cube
    if (!cube) {
        throw new ReferenceError('No such ID in database.')
    }

    const newComment = new Comment(comment)
    await  newComment.save()

    cube.comments.push(newComment)
    await cube.save()
}
async function getAllAccessories(existing) {
    //$nin -> not in there, so only accessories that haven't been added are rendered
    return Accessory.find({_id: { $nin: existing}}).lean()
}
async function createAccessory(accessory) {
    const record = new Accessory(accessory)
    return record.save()
}
async function attachSticker(cubeId,stickerId) {
    const cube = await Cube.findById(cubeId)
    const sticker = await Accessory.findById(stickerId)
    // if there is no such cube
    if (!cube || !sticker) {
        throw new ReferenceError('No such ID in database.')
    }

    cube.accessories.push(sticker)
    return cube.save()
}



//exporting all functions to use externally ; can also be used via init 

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit,
    createComment,
    createAccessory,
    getAllAccessories,
    attachSticker
}
