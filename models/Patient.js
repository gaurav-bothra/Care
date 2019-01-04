let Sequelize = require('sequelize');
let db = require('../config/dbConfig')

let Patient = db.define('Patient', {
    Name : {
        type : Sequelize.STRING,
        allowNull : false
    }, 
    DOB : {
        type : Sequelize.DATE,
        allowNull : false
    },
    Gender : {
        type : Sequelize.CHAR,
        values : ['M', 'F'],
        allowNull : false
    },
    Address : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    Phone_no : {
        type : Sequelize.NUMBER,
        allowNull : false
    },
    Blood_group : {
        type : Sequelize.STRING,
        values : ['A+', 'B+', null],
        allowNull : true
    }
})

module.exports = Patient