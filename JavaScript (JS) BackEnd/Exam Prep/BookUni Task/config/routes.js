const authController = require('../controllers/authController')
const homeController = require('../controllers/homeController')
const hotelController = require('../controllers/hotelController')

module.exports = (app) => {
    //whenever a request starting with /auth is received, authController tackles rest
    app.use('/auth', authController);
    app.use('/', homeController)
    app.use('/hotels', hotelController)
}