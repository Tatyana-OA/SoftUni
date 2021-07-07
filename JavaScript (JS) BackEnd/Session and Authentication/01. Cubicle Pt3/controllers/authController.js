const {Router} = require('express');
const { isGuest, isAuth } = require('../middlewares/guards');
const router = Router();

router.get('/register', isGuest(), (req,res) => {
    res.render('register', {title: 'Register Page'})
})
router.post('/register', isGuest(), async (req,res) => {
    try {
        // called via created auth middleware
       await req.auth.register(req.body);
        res.redirect('/products')
    }catch(err) {
        const ctx = {title:'Register', 
        // if an error will be displayed inside the template
        error: err.message, 
        // so username can be displayed if error in template
        data: {username: req.body.username}}
        res.render('register', ctx)
    }
  
})

router.get('/login',  isGuest(), (req,res) => {
    res.render('login', {title: 'Login Page'})
})
router.post('/login',  isGuest(),async (req,res) => {
    try {
        //req.auth is middleware!
       await req.auth.login(req.body)
       // call service 
        res.redirect('/products')
    }
    catch(err) {
        const ctx = {title:'Login', 
        // if an error will be displayed inside the template
        error: err.message, 
        // so username can be displayed if error in template
        data: {username: req.body.username}}
        res.render('login', ctx)
    }
   
})

router.get('/logout', isAuth(), (req,res) => {
    req.auth.logout()
    res.redirect('/products')
})

module.exports = router;