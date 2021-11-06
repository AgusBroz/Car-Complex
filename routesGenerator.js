const path= require('path')
module.exports = app =>{
    const indexRoutes = require(path.join(__dirname, 'routes','index'))
    const usersRoutes = require(path.join(__dirname, 'routes', 'users'))
    const turnosRoutes = require(path.join(__dirname, 'routes', 'turnos'))

    app.use('/', indexRoutes)
    app.use('/', usersRoutes)
    app.use('/', turnosRoutes )
    // app.use('/scoreboard', scoreboardRoutes)
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