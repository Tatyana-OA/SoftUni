// the actions performed on the model
const Play = require('../models/Play')

async function getAllPlays() {
    return await Play.find({public:true}).sort({createdAt: 1}).lean() //w/o getters, setters, etc
}

async function getPlayById(id) {
    return await Play.findById(id).lean()
}
async function createPlay(playData) {
    const pattern = new RegExp(`/^${playData.title}$/`, 'i')
    const existing = await Play.findOne({title: {$regex: pattern}})
    console.log(existing)
    if (existing) {
        throw new Error('A play with this name already exists!')
    }
    const play = new Play(playData)
    await play.save();
    return play;

}
async function editPlay(id,playData) {
    const play = await Play.findById(id)
    play.title = playData.title
    play.description = playData.description
    play.imageUrl = playData.imageUrl
    play.public = Boolean(playData.public)

    return await play.save();

}
async function deletePlay(id) {
    return  Play.findByIdAndDelete(id)
}
async function likePlay(id, userId) {
    const play = await Play.findById(id)
    play.usersLiked.push(userId)

    return play.save();
}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay,
    likePlay
}