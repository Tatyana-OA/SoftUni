
//DATABASE OPERATIONS in service


    const Hotel = require('../models/Hotel')
    const User = require('../models/User')

    async function createHotel(hotelData) {
    
        const hotel = new Hotel(hotelData)
        
        await hotel.save();
        return hotel; // to use in middleware or elsewhere in app
    }
    async function getAllHotels() {
        const hotels = await Hotel.find({}).lean()
        return hotels;
    }
    async function getHotelById (id) {
        const hotels = await Hotel.findById(id).lean()
        return hotels;
    }

    async function editHotel (id, hotelData) {
        const hotel = await Hotel.findById(id)
        hotel.name = hotelData.name
        hotel.city = hotelData.city
        hotel.rooms = Number(hotelData.rooms)
        hotel.imageUrl = hotelData.imageUrl

        return hotel.save()
        
    }
    async function bookHotel(hotelId,userId) {
       
        //calling info from both models
        const hotel = await Hotel.findById(hotelId)
        const user = await User.findById(userId)

        if (user._id == hotel.owner) {
            throw new Error('Cannot book your own hotel!')
        }
        user.bookedHotels.push(hotel)
        hotel.bookedBy.push(user)
    //to save info in both models
        return Promise.all([user.save(), hotel.save()]);

    }
    
    
    //TODO add other functions that find a user
    
    module.exports = {
       getAllHotels,
       getHotelById,
       createHotel,
       editHotel,
       bookHotel
    }