const {server} = require('./server')
require('./database')


//Escuchar en puerto 
server.listen(process.env.PORT || 3000, function(){
    console.log(`Server Listening on ${3000}`)
})


