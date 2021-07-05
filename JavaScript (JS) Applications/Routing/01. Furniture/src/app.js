import page from '../node_modules/page/page.mjs'
//import logout function
import {logout} from './api/data.js'
//importing view handlers !!! Import transfers context to view handler
import {dashboardPage} from './views/dashboard.js'
import {detailsPage} from './views/details.js'
import {editPage} from './views/edit.js'
import {loginPage} from './views/login.js'
import {registerPage} from './views/register.js'
import {myPage} from './views/myFurniture.js'
import {createPage} from './views/create.js'

// importing CRUD functions

import * as api from './api/data.js'
window.api = api; // Use for testing purposes 

//importing lit-html to use it for middleware function & setting main selector
import {render} from '../../node_modules/lit-html/lit-html.js'
const main = document.querySelector('.container');
// each viewhandler to the address
// /:id for each unique furniture piece; gets saved in context.params
page('/', decorateContext, dashboardPage)
page('/dashboard', decorateContext, dashboardPage)
page('/my-furniture',decorateContext, myPage)
page('/details/:id', decorateContext, detailsPage)
page('/create', decorateContext, createPage)
page('/edit/:id', decorateContext, editPage)
page('/register',decorateContext,  registerPage)
page('/login', decorateContext, loginPage)

document.getElementById('logoutBtn').addEventListener('click', async() => {
    await logout()
    page.redirect('/')
    setUserNav()
})
// start program
setUserNav()
page.start()

//middleware to expose selector globally via context
//always inherits next and must call next at the end so next action can take place -> the function from the view controller
function decorateContext(ctx,next) {
    // whatever html content is given, it is rendered inside the main
    ctx.render = (content) => render(content,main)
    ctx.setUserNav = setUserNav
    next();
}
// navigation which will be part of the context
function setUserNav() {
    const userId = sessionStorage.getItem('userId')
    if (userId!=null) {
        document.getElementById('user').style.display='inline-block'
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('guest').style.display='inline-block'
        document.getElementById('user').style.display = 'none'
    }
}



