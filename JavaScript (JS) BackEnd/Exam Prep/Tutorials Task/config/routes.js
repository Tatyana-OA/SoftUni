const authController = require('../controllers/authController')
const courseController = require('../controllers/courseController')
const homeController = require('../controllers/homeController')

module.exports = (app) => {
    //whenever a request starting with /auth is received, authController tackles rest
    app.use('/auth', authController);
    app.use('/course', courseController)
    app.use('/', homeController)
}