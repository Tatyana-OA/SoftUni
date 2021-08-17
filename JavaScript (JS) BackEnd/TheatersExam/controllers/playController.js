const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isGuest, isUser} = require('../middlewares/guards')
const {parseError} = require('../util/parsers')

router.get('/create', isUser(), (req,res) => {
	
    res.render('play/create')
})
router.post('/create', isUser(), async (req,res) => {
    try{
        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            public: Boolean(req.body.public),
            author: req.user._id
           
        }
        await req.storage.createPlay(playData)
        res.redirect('/')
    }
    catch(err) {
        const ctx = {
            errors: parseError(err),
            playData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                public: Boolean(req.body.public),
            }
           
        }
        res.render('play/create',ctx)
    }
})
router.get('/details/:id', isUser(), async (req,res) => {
	try {
        const play = await req.storage.getPlayById(req.params.id)
        console.log(play)
        console.log(req.user)
		console.log(play.usersLiked)
        play.hasUser = Boolean(req.user)
        // attach variables to play -> if there is a user and this user is the play's author
        play.isAuthor = req.user && req.user._id == play.author
        // if the populated usersLiked includes the current user (so they cant like it again)
        play.liked = req.user && play.usersLiked.find(u => u._id == req.user._id)

        res.render('play/details', {play})
    }
    catch(err) {
        console.log(err.message)
        res.redirect('/404')
    }

})
router.get('/delete/:id', isUser(), async (req,res) => {
    //delete in the case of no delete page just button
    try {   
        const play = await req.storage.getPlayById(req.params.id)
        // check if this is the play's author
        if (play.author != req.user._id) {
            throw new Error ('Cannot delete a play you did not create!')
        }
        await req.storage.deletePlay(req.params.id)
        res.redirect('/')
    }catch(err) {
        console.log(err.message)
        res.redirect('/play/details/' + req.params.id)
    }
})

router.get('/edit/:id', isUser(), async (req,res) => {
    try {
    const play = await req.storage.getPlayById(req.params.id)
    // check if this is the play's author
    if (play.author != req.user._id) {
        throw new Error ('Cannot edit a play you did not create!')
    }
    res.render('play/edit', {play})
    }
    catch(err) {
        console.log(err.message)
        res.redirect('/play/details/' + req.params.id)
    }
})
router.post('/edit/:id', isUser(), async (req,res) => {
    try {
    const play = await req.storage.getPlayById(req.params.id)
    // check if this is the play's author
    if (play.author != req.user._id) {
        throw new Error ('Cannot edit a play you did not create!')
    }
    
    await req.storage.editPlay(req.params.id, req.body)
    res.redirect('/')
    }
    catch(err) {
        // so error can be populated correctly via parser 
        const ctx=  {
            errors: parseError(err),
            play: {
                _id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                public: Boolean(req.body.public)
            }
        }
        console.log(err.message)
        res.render('play/edit', ctx)
    }
})
router.get('/like/:id', isUser(), async (req,res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id)
        // check if this is the play's author
        if (play.author == req.user._id) {
            throw new Error ('Cannot like your own play!')
        }
        await req.storage.likePlay(req.params.id, req.user._id)
        res.redirect('/play/details/' + req.params.id)
        }
        catch(err) {
            console.log(err.message)
            res.redirect('/play/details/' + req.params.id)
        }
})





module.exports = router;
