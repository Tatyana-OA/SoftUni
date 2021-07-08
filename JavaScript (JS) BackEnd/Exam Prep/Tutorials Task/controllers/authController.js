// Actions, modular router, what each request renders
// Validation via express-validator or if-else construction

const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isGuest, isUser} = require('../middlewares/guards')

router.get('/register', isGuest(), (req,res) => {
    res.render('user/register')
})

//validation and errors. If no errors, register with data taken from request
router.post('/register', isGuest(),
body('username').isLength({min:5}).withMessage('Username must be at least 5 chars.').bail()
.isAlphanumeric().withMessage('Username must contain only English letters and digits'),
body('password').isLength({min:5}).withMessage('Password must be at least 5 chars.').bail()
.isAlphanumeric().withMessage('Username must contain only English letters and digits'),
body('rePass').custom((value, {req}) => {
    if (value !=req.body.password) {
        throw new Error('Passwords do not match')
    }
    return true;
}),
    async (req,res) => {
    const {errors }= validationResult(req)
    try {
        if (errors.length>0) {
            //IMPROVE MESSAGES
            throw new Error (Object.values(errors).map(e =>e.msg).join('\n'))
        }

        await req.auth.register(req.body.username,req.body.password)
        res.redirect('/') // change location if needed
    }
    catch (err) {
        // ctx that template will receive
        console.log(err)
        const ctx = {
            errors: err.message.split('\n'),
            userData: {
                username:req.body.username
            }
        }
        res.render('user/register', ctx)
    }
   
   
})
router.get('/login', isGuest(), (req,res) => {
    res.render('user/login')
})
router.post('/login', isGuest(), async (req,res) => {
    try {
        await req.auth.login(req.body.username,req.body.password)
        res.redirect('/')

    } catch(err) {
        console.log(err)
        let errors = [err.message]
        if (err.type =='credential') {
            errors = ['Incorrect username or password']
        }
        const ctx = {
            errors,
            userData: {
                username:req.body.username
            }
        }
        res.render('user/login', ctx)
    }
    
})

router.get('/logout', (req,res) => {
    req.auth.logout()
    res.redirect('/')
})
module.exports = router;