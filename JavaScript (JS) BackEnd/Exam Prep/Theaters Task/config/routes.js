const authController = require('../controllers/authController')
const playController = require('../controllers/playController')
const homeController = require('../controllers/homeController')

module.exports = (app) => {
    //whenever a request starting with /auth is received, authController tackles rest
    app.use('/auth', authController);
    app.use('/play', playController);
    app.use('/', homeController)

}