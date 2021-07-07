const Cube = require('../models/Cube')
const Accessory = require('../models/Accessory')
const Comment = require('../models/Comment')

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
    const cube = await Cube
    .findById(id)
    .populate({
        path: 'comments', 
        populate: {path: 'author'} // nested populate, first the comments from the array, then their authors
    })
    .populate('accessories')
    .populate('author')
    .lean(); // lean to return only data, no methods
    if (cube) {
        console.log(cube)
        const viewModel = {
            _id: cube._id,
            name: cube.name,
            description: cube.description,
            imageUrl: cube.imageUrl,
            difficulty: cube.difficulty,
            comments: cube.comments.map(c => ({content: c.content, author: c.author.username})),
            accessories: cube.accessories,
            author: cube.author && cube.author.username,
            authorId: cube.author && cube.author._id

        }
        // if (cube.author) {
        //     viewModel.author = cube.author.username
        // }
        return viewModel;
    } else {
        return undefined;
    }
    
}

async function create(cube) {
    const record = new Cube(cube)
    console.log(cube)
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
async function del(id) {
    const existing = await Cube.findById(id)
    // if there is no such cube
    if (!existing) {
        throw new ReferenceError('No such ID in database.')
    }
    return Cube.deleteOne(existing)

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

module.exports = {
    getAll,
    getById,
    create,
    edit,
    createComment,
    attachSticker,
    del
}
