const router = require('express').Router()
const {isUser} = require('../middlewares/guards')

// guard so only users can create
router.get('/create', isUser(), async(req,res) => {
    res.render('hotel/create')
})

// guard so only users can create
router.post('/create', isUser(), async (req,res) => {
    const hotelData = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: req.body.rooms,
        bookedBy: [],
        owner: req.user._id
    }
    try {
        await req.storage.createHotel(hotelData)
        res.redirect('/')
    }catch(err) {
        console.log(err.message)
        // Mongoose validation mapping
        let errors;
        if (err.errors) {
            errors = Object.values(err.errors).map(e => e.properties.message)
        }else {
            // for non-Mongoose valdiation errors
            errors = [err.message]
        }
        
  
        // create ctx for erros rendering and hotelData access in template
        const ctx = {
            errors,
            hotelData: {
                name: req.body.name,
                city: req.body.city,
                imageUrl: req.body.imageUrl,
                rooms: req.body.rooms,
            }
        }
        res.render('hotel/create', ctx)
    }
})

router.get('/details/:id', async (req,res) => { 

    try {
        const hotel = await req.storage.getHotelById(req.params.id)
        // button logic 
        hotel.hasUser = Boolean(req.user) // there's a logged in user
        hotel.isAuthor = req.user && req.user._id== hotel.owner // logged in user is the same as the owner (by id)
        hotel.isBooked = req.user && hotel.bookedBy.find(x => x== req.user._id) // finding within all who have booked whether the user's id is the same
        res.render('hotel/details', {hotel})
    }
    catch(err) {
        console.log(err.message)
        res.redirect('/404')
    }
})


//EDIT FUNCTIONS

router.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id)
        if (req.user._id !=hotel.owner) {
            throw new Error('Cannot edit a hotel you have not created!')
        }
       
        res.render('hotel/edit', {hotel})
    }
    catch(err) {
        console.log(error)
        res.redirect('/')
    }
})
router.post('/edit/:id', isUser(), async (req,res)=> {
    try {
        const hotel = await req.storage.getHotelById(req.params.id)
        if (req.user._id !=hotel.owner) {
            throw new Error('Cannot edit a hotel you have not created!')
        }
        await req.storage.editHotel(req.params.id,req.body)
        res.redirect('/')
    }
    catch(err){
        console.log(err.message)
        // Mongoose validation mapping
        let errors;
        if (err.errors) {
            errors = Object.values(err.errors).map(e => e.properties.message)
        }else {
            // for non-Mongoose valdiation errors
            errors = [err.message]
        }
        
  
        // create ctx for erros rendering and hotelData access in template
        const ctx = {
            errors,
            hotel: {
                _id: req.params.id,
                name: req.body.name,
                city: req.body.city,
                imageUrl: req.body.imageUrl,
                rooms: req.body.rooms,
            }
        }
        res.render('hotel/edit', ctx)
    }
})

//booking a hotel

router.get('/book/:id', isUser(), async(req,res) => {
    try {
        const hotelId = req.params.id
        const userId = req.user._id
       await req.storage.bookHotel(hotelId,userId)
        
        res.redirect('/hotels/details/' + req.params.id)
        console.log(req.params.id)
    }catch(err) {
        console.log(err)
        res.redirect('/')
    }
})
module.exports = router;