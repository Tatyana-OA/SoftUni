

const Accessory = require('../models/Accessory')

async function getAllAccessories(existing) {
    //$nin -> not in there, so only accessories that haven't been added are rendered
    return Accessory.find({_id: { $nin: existing}}).lean()
}
async function createAccessory(accessory) {
    const record = new Accessory(accessory)
    return record.save()
}

module.exports = {

    createAccessory,
    getAllAccessories,
  
}
