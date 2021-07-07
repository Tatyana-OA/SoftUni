//PURPOSE: consolidation of all product-related controllers
// - edit
// - create
// - details
// - catalog

const {Router} = require('express');// modular router; /products/...
const { isAuth, isOwner } = require('../middlewares/guards');
const {preloadCube}  = require('../middlewares/preload')
const router = Router();

// functions are transferred from previously existing separate controllers

router.get('/',async (req,res) => {
    //rendering views using handlebars. view will be rendered in the body portion
    //all properties of the object (such as title), will replace the same properties in the hbs template
    const cubes = await req.storage.getAll(req.query) // param is only for SEARCh
    //particular view's context that has title + data
    const ctx = {
        title: 'Cubicle',
        cubes,
        search: req.query.search || "",
        from: req.query.from || "",
        to: req.query.to || ""
    }
    res.render('index', ctx);
    
});

router.get('/create', isAuth(), (req,res) => {
    res.render('create', {title:'Create Cube'})
});

router.post('/create',isAuth(),async (req,res) => {
    //creating a cube that will be constituted of the properties from form
   // these properties are parsed through the body-parser from express
    const cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficulty: Number(req.body.difficulty),
        author: req.user._id
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
})

router.get('/details/:id',preloadCube(),  async (req, res) => {
    const cube = req.data.cube;
    if (cube == undefined){
        res.redirect('/404');
    } else{
        cube.isOwner = req.user && (cube.authorId == req.user._id)
        const ctx = {
            title: 'Cubicle',
            cube,

        }
        res.render('details', ctx);
    }
    
})

router.get('/edit/:id', preloadCube(), isOwner(), async (req,res) => {
    const cube = req.data.cube;
    // for the edit functionality -> select option
  
    if (!cube) {
        res.redirect('404')
    }else {
        cube[`select${cube.difficulty}`] = true;
        const ctx= {title: 'Edit Cube', cube}
        res.render('edit', ctx)
    }
    
})
 router.post('/edit/:id',preloadCube(),isOwner(), async (req,res) => {
    const cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficulty: Number(req.body.difficulty) 
    }
    try {
        await req.storage.edit(req.params.id,cube)
        res.redirect('/')
    }
    catch(err){
        res.redirect('/404')
    }
   
   
})

//attaching accessories to cubes is cube editing in itself

router.get('/attach/:cubeId', async (req,res) => {
    const cube = await req.storage.getById(req.params.cubeId);
    const accessories = await req.storage.getAllAccessories((cube.accessories || [] ).map( a => a._id));
    res.render('attach', {
        title: 'Attach Stickers',
        cube,
        accessories
    })
})



router.post('/attach/:cubeId', async (req,res) => {
    const cubeId = req.params.cubeId
    const stickerId = req.body.accessory;

    await req.storage.attachSticker(cubeId,stickerId)

    res.redirect(`/details/${cubeId}`)
    
})



module.exports = router // so it can be mounted for usage (app.use)