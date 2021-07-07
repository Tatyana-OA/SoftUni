
//importing controllers for routing 

const {about} = require('../controllers/about');
const {catalog} = require('../controllers/catalog');
const {create, post} = require('../controllers/create');
const {details, attach, attachPost} = require('../controllers/details');
const {edit, post: editPost} = require('../controllers/edit');
const {notFound} = require('../controllers/notFound');
const {post: commentPost} = require('../controllers/comments');
const { createAccessory, accessoryPost } = require('../controllers/accessory');


module.exports = (app) => {
    //routes using app.METHOD that will be executed at a certain route
//controllers will be imported from controllers folder.
//each controller has the structure of a function (req,res) => {}
app.get('/', catalog)
app.get('/about',about)
app.get('/details/:id',details) //req.params will hold id
app.get('/create',create)
app.post('/create', post)
app.get('/edit/:id', edit)
app.post('/edit/:id', editPost)

app.post('/comments/:cubeId/create', commentPost)
app.get('/accessory/create', createAccessory)
app.post('/accessory/create', accessoryPost)

app.get('/details/:id/attach', attach)
app.post('/details/:cubeId/attach', attachPost)

app.all('*', notFound) //for all other routes, 404 vies
}