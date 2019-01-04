let Sequelize = require('sequelize')


require('dotenv').config()

let db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host : process.env.DB_HOST,
    dialect : process.env.DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.authenticate()
    .then(() => console.log(`Database is connected`))
    .catch((err) => console.log(`Error ${err} while connecting Database`))


module.exports =  db;