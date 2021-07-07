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

        //creating cube via create function in middleware storage
       await req.storage.create(cube);

        res.redirect('/')
    }
}