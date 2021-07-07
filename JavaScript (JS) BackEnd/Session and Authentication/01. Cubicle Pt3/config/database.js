const mongoose = require('mongoose');


module.exports = (app) => {
    //all within a promise so we can await it outside file when needed

    return new Promise((resolve,reject) => {
    //standard mongoose setup
    mongoose.connect('mongodb://localhost:27017/cubicle', {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });

    const db = mongoose.connection;
    //event listener which fires on error/open event
    db.on('error', err => {
        console.error('Database error: ', err.message)
        reject(err.message);
    })
    db.on('open', () => {
        console.log('Database connected')
        resolve();
    })
    })

}