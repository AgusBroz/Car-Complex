const path= require('path')
module.exports = app =>{
    const indexRoutes = require(path.join(__dirname, 'routes','index'))
    const usersRoutes = require(path.join(__dirname, 'routes', 'users'))
    const turnosRoutes = require(path.join(__dirname, 'routes', 'turnos'))
    const resourcesRoutes = require(path.join(__dirname, 'routes', 'resources'))

    app.use('/', indexRoutes, usersRoutes, turnosRoutes, resourcesRoutes)
    app.get("*", function (req, res) {
        res.redirect("/");
        //res.end()
    });

    app.use(function(err, req, res){
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    })
}   