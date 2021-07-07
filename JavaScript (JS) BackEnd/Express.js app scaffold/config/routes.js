const authController = require('../controllers/authController')

module.exports = (app) => {
    //whenever a request starting with /auth is received, authController tackles rest
    app.use('/auth', authController);
}