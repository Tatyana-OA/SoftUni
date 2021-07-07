//route controller for a catalog page
module.exports={
    //make them async due to database connection
catalog: async (req,res) => {
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
    
}
}