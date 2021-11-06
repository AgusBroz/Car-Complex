const express = require('express')
const app = express()
const http = require('http');
const socketio = require('socket.io');
const server=http.Server(app)
const io=socketio(server)
const path= require('path')
// const morgan = require('morgan')
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')
const session = require('express-session')
const sessionMiddleware = session({
    secret: 'hanoitowers',
    resave: true,
    saveUninitialized: true
})
const flash = require('connect-flash')
// const passport = require('passport')
// const methodOverride = require('method-override')
// const back = require('express-back');
// const { mongo } = require('./config');
// require('./config/passport');

//imports
//...

//settings
//app.set('port', mongo.PORT)
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)//esto es para que lis archivos html se rendericen como ejs

//static files
app.use(express.static(path.join(__dirname, 'public')))

//middlewares
// app.use(methodOverride("_method"));
// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended: false}))
// //app.use(bodyParser.json())
// app.use(cookieParser())
app.use(flash())
app.use(sessionMiddleware) 
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(back())


//global variables
app.use(function(req, res, next){
    res.locals.error = req.flash('error')
    res.locals.success = req.flash('success')
    res.locals.warning = req.flash('warning')
    res.locals.errors = []
    res.locals.user = req.user || null
    next()
})

//routes
require('./routesGenerator')(app)

//sockets
// convert a connect middleware to a Socket.IO middleware
// const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

// io.use(wrap(sessionMiddleware));
// io.use(wrap(passport.initialize()));
// io.use(wrap(passport.session()));

// io.use((socket, next) => {
//     if (socket.request.user) {
//         next();
//     } else {
//         next(new Error('unauthorized'))
//     }
// });

// require('./sockets')(io);
module.exports = {server, io}