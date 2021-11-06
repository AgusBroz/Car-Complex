const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/user') //importo el modelo de usuario en la BD

passport.use(new LocalStrategy({
    usernameField: 'nickname'
}, async (nickname, password, done)=>{
    const user = await User.findOne({nickname: nickname})
    if(!user){
        return done(null, false, { message: 'Invalid Credentials' }) //null: no hay ningun error | false: no hay ningun usuario | mensaje
    }
    else{
        const match = await user.matchPasswords(password)
        if(match){
            return done(null, user, { message: 'Logged in!' })//no hay error, pero si un usuario encontrado, todo esta valido
        }
        else{
            return done(null, false, { message: 'Invalid Credentials' })
        }
    }
}))

passport.serializeUser(function(user, done){
    done(null, user.id)
})
passport.deserializeUser(function(id, done){
    User.findById(id,function(err, user){
        done(err,user)
    })
})