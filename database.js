const mongoose = require('mongoose')
const { mongo } = require('./config')

//bd connection
mongoose.connect(`mongodb://${mongo.HOST}/${mongo.DB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('db connected'))
.catch(err => console.error(err)) 