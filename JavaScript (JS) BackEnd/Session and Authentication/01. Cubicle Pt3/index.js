
const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database')
const routesConfig = require('./config/routes')


//initializing middleware created in models/storage
const  storage = require('./middlewares/storage')

start()

async function start() {
    const port = 3000 // where server will be available
    const app = express(); // the actual express app
   

    
    // !!! MIDDLEWARE BEFORE ROUTES
    await databaseConfig(app) // using await because it's a Promise
    expressConfig(app)
    
    app.use( await storage()) // -> we pack everything into an async function Start so we can await init function which is renamed to "storage"
    routesConfig(app)

    // middleware is set to be used throughout whole app
    //setting up body-parser middleware


app.listen(port, () => console.log(`Server listening on port ${port}`))
}
