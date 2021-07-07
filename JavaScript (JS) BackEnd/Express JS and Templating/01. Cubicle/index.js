//initialize express app
//setup handlebars
//setup static files
//setup storage middleware
//set route handlers (controller actions)

const express = require('express');
const app = express(); // the actual express app

const port = 3000 // where server will be available

//importing controllers for routing 
const hbs = require('express-handlebars'); 
const {about} = require('./controllers/about');
const {catalog} = require('./controllers/catalog');
const {create, post} = require('./controllers/create');
const {details} = require('./controllers/details');
const {edit, post: editPost} = require('./controllers/edit');
const {notFound} = require('./controllers/notFound');

//initializing middleware created in models/storage

const {init: storage} = require('./models/storage')

start()

async function start() {
//setting up handlebars and how templates will be read

app.engine('hbs',hbs({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
//setting up where files will be situated
app.use('/static', express.static('static')) 
// to load a front-end js file
app.use('/js',express.static('js'))
// middleware is set to be used throughout whole app
app.use( await storage()) // -> we pack everything into an async function Start so we can await init function which is renamed to "storage"
//setting up body-parser middleware
app.use(express.urlencoded({extended:false}))


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

app.all('*', notFound) //for all other routes, 404 vies

app.listen(port, () => console.log(`Server listening on port ${port}`))
}
