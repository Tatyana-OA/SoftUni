//will be middleware - link between router and action controller
//will act as decoration to req
const Cube = require('../models/Cube')
const Accessory = require('../models/Accessory')

const productService = require('../services/product')
const accessoryService = require('../services/accessory')

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
        const storage = Object.assign({}, productService,accessoryService)
         //middleware
        req.storage = storage;
        // from express
        next()
    }

}

module.exports = init