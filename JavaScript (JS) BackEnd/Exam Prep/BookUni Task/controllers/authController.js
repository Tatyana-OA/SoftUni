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
    body('email', 'Invalid email').isEmail(),    
    body('username').isLength({min:3}).withMessage('Username must be at least 3 chars.'),
    body('password').matches(/[a-zA-Z0-9]/).withMessage('Password must contain only letter and numbers'),
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
            const message = errors.map( e => e.msg).join('\n')
            //IMPROVE MESSAGES
            throw new Error (message)
        }

        await req.auth.register(req.body.username, req.body.email,req.body.password)
        res.redirect('/') // change location if needed
    }
    catch (err) {
        // ctx that template will receive
        const ctx = {
            errors: err.message.split('\n'),
            userData: {
                username:req.body.username,
                email: req.body.email
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
        const ctx = {
            errors: [err.message],
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