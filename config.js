const config ={
    mongo:{
        PORT: process.env.PORT || 3000,
        HOST: process.env.MONGODB_HOST || 'localhost',
        DB:  process.env.MONGODB_DB || 'taller-mecanico'
    }
}

module.exports = config
