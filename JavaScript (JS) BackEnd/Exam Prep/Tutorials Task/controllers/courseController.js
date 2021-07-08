const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isGuest, isUser} = require('../middlewares/guards')

const { parseError } = require('../util/parsers')

router.get('/create', isUser(), (req,res) => {
    res.render('course/create')
})
router.post('/create', isUser() ,body('imageUrl').isURL().withMessage('Image URL must be valid'),
 async (req,res) => {
    try{
        const courseData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            author: req.user._id
           
        }
        await req.storage.createCourse(courseData)
        res.redirect('/')
    }
    catch(err) {
        const ctx = {
            errors: parseError(err),
            courseData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                duration: req.body.duration,
                author: req.user._id
            }
           
        }
        res.render('course/create',ctx)
    }
})

router.get('/details/:id', async (req,res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id)
        course.hasUser = Boolean(req.user)
        // attach variables to play -> if there is a user and this user is the play's author
        course.isAuthor = req.user && req.user._id == course.author
        // if the populated usersLiked includes the current user (so they cant like it again)
        course.enrolled = req.user && course.usersEnrolled.find(u => u._id == req.user._id)
        res.render('course/details', {course})
    }
    catch(err) {
        console.log(err.message)
        res.redirect('/404')
    }

   
})

router.get('/delete/:id', isUser(), async (req,res) => {
    //delete in the case of no delete page just button
    try {   
        const course = await req.storage.getCourseById(req.params.id)
        // check if this is the play's author
        if (course.author != req.user._id) {
            throw new Error ('Cannot delete a play you did not create!')
        }
        await req.storage.deleteCourse(req.params.id)
        res.redirect('/')
    }catch(err) {
        console.log(err.message)
        res.redirect('/course/details/' + req.params.id)
    }
})

router.get('/edit/:id', isUser(), async (req,res) => {
    try {
    const course = await req.storage.getCourseById(req.params.id)
    // check if this is the play's author
    if (course.author != req.user._id) {
        throw new Error ('Cannot edit a course you did not create!')
    }
    res.render('course/edit', {course})
    }
    catch(err) {
        console.log(err.message)
        res.redirect('/course/details/' + req.params.id)
    }
})
router.post('/edit/:id', isUser(), async (req,res) => {
    try {
    const course = await req.storage.getCourseById(req.params.id)
    // check if this is the play's author
    if (course.author != req.user._id) {
        throw new Error ('Cannot edit a course you did not create!')
    }
    
    await req.storage.editCourse(req.params.id, req.body)
    res.redirect('/')
    }
    catch(err) {
        // so error can be populated correctly via parser 
        const ctx=  {
            errors: parseError(err),
            course: {
                _id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                duration: req.body.duration
            }
        }
        console.log(err.message)
        res.render('course/edit', ctx)
    }
})

router.get('/enroll/:id', isUser(), async (req,res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id)
        // check if this is the play's author
        if (course.author == req.user._id) {
            throw new Error ('Cannot enroll in your own course!')
        }
        await req.storage.enrollCourse(req.params.id, req.user._id)
        res.redirect('/course/details/' + req.params.id)
        }
        catch(err) {
            console.log(err.message)
            res.redirect('/course/details/' + req.params.id)
        }
})


module.exports = router;