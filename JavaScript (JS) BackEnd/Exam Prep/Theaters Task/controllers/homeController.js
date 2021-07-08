const router = require('express').Router()

router.get('/', async (req,res)=> {
    const plays = await req.storage.getAllPlays();
    console.log(req.user)
    res.render('home', {plays})
})

module.exports = router;