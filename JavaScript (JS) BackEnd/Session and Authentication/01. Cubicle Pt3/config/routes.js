
//importing controllers for routing 

const {post: commentPost} = require('../controllers/comments');

const productController = require('../controllers/productController')
const accessoryController = require('../controllers/accessoryController')
const homeController = require('../controllers/homeController')
const authController = require('../controllers/authController')
const { isAuth } = require('../middlewares/guards');

module.exports = (app) => {
//routes using app.METHOD that will be executed at a certain route
//controllers will be imported from controllers folder.
//each controller has the structure of a function (req,res) => {}


//all product controllers via modular router
// edit all template routes to include /prducts
app.use('/products', productController) 
app.use('/accessory', accessoryController)
app.use('/auth', authController)


app.post('/comments/:cubeId/create', isAuth(), commentPost)


app.use('/', homeController)
}