//will be middleware - link between router and action controller
//will act as decoration to req

const fs = require("fs").promises //file system using async functions
const uniqid = require('uniqid')
// {} TASKS {}
//load and parse data file
//provide ability to:
// - read all entries
// - read single entry by ID
// - add new entry
// *- get matching entries by search criteria

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
    try {
        data = JSON.parse(await fs.readFile('./models/data.json')) //path is relative to index.js
        console.log('Created a new record')
    }
    catch(err) {
        console.error('Error reading database')
    }
   
    return (req, res, next) => {
         //middleware
        req.storage = {
            getAll,
            getById,
            create,
            edit
        }
        // from express
        next()
    }

}

async function getAll(query) {
    let cubes = Object.entries(data)
    .map(([id,v]) => Object.assign({}, {id}, v))
    // for each id:value pair, create an object containing the id and all the other values
    
    //filter cubes by query for SEARCH if any

    if (query.search) {
        cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()))
    }
    if (query.from) {
        cubes = cubes.filter(c => c.difficulty >= Number(query.from))
    }
    if (query.to) {
        cubes = cubes.filter(c => c.difficulty <= Number(query.to))
    }
    return cubes;
}

async function getById(id) {
    const cube = data[id]
    if (cube) {
        return Object.assign({}, {id}, cube)
    } else {
        return undefined;
    }
    
}

async function create(cube) {
    const id = uniqid();
    data[id] = cube;

    //saving the record
    await persist();
    
}
async function edit(id,cube) {
    // if there is no such cube
    if (!data[id]) {
        throw new ReferenceError('No such ID in database.')
    }
    data[id] = cube;
    await persist();

}
async function persist() {
    try {
        fs.writeFile('./models/data.json', JSON.stringify(data,null,2)) // this way data will be formated with indent 2
    } catch (err) {
        console.error('Error writing out database')
    }
}

//exporting all functions to use externally ; can also be used via init 

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit
}
