const router = require('express').Router()

router.get('/', async (req,res)=> {
    const courses= await req.storage.getAllCourses();
  
    for (course of courses) {
        course.hasUser = res.locals.user
    }
    console.log(courses)
    res.render('home/home', {courses})
})

module.exports = router;