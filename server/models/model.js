const mongoose = require('mongoose')

const employeetemplate = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    sal : {
        type : String,
        required : true,
    },

    gender : {
        type : String,
        required : true
    },

    team : {
        type : String,
        required : true,
    },

    add : {
        type : String,
        required : true,
    }


})

const cen = mongoose.model('emp',employeetemplate)

module.exports = {cen}