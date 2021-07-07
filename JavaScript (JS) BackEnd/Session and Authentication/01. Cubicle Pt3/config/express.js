const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser')


const auth = require('../middlewares/auth')
module.exports = (app) => {
    //setting up handlebars and how templates will be read
    app.engine('hbs',hbs({
        extname: '.hbs'
    }))
    app.set('view engine', 'hbs')
    //setting up where files will be situated
    app.use('/static', express.static('static')) 
    // to load a front-end js file
    app.use('/js',express.static('js'))
    app.use(express.urlencoded({extended:false}))
    app.use(cookieParser())
    app.use(auth())
}