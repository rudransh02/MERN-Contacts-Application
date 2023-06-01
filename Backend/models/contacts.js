const mongoose = require('mongoose');


// Schema will define the structure of our database object
const Schema = mongoose.Schema;


// Creating an object of Schema type and defining the structure of the data we need to store in the database
const contactSchema = new Schema({
    fullName : {
        type : String,
        required : true
    },
    homeTown : {
        type : String,
        required : false
    },
    phoneNumber : {
        type : String,
        required : true
    },
    emailAddress : {
        type : String,
        required : false
    }
    // Timestamps property will automatically assign the time with every request that is made to the database
}, {timestamps : true});


// Storing the model and its schema type and then exporting the model
const Contacts = mongoose.model('Contacts', contactSchema);


// Exporting the model in order to make it available for all other files to access
module.exports = Contacts;