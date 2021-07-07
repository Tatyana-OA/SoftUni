const { Mongoose } = require("mongoose");

module.exports={
    //general action on page
    create:(req,res) => {
        res.render('create', {title:'Create Cube'})
    },
    //specific "post" request for creation of a record
    post: async (req,res) => {
        //creating a cube that will be constituted of the properties from form
       // these properties are parsed through the body-parser from express
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: Number(req.body.difficulty)
        }
        try {
        //creating cube via create function in middleware storage
        await req.storage.create(cube);
        }
        catch(err) {
            if (err.name=='ValidationError') {
                //specific render settings for create.hbs in case of an error
                return res.render('create', {title:'Create Cube', error: 'All fields are required. Image URL must be valid.'})
            }
            console.log(err.name)
        }


        res.redirect('/')
    }
}