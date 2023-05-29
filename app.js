// Requiring all the necessary packages
const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./models/contacts');

// Creating an express app
const app = express();


// Defining the required variables for the database
const username = "localhost";
const password = "localhost";
const DBname = "MERN";


// Connecting to our MongoDB
const databaseURL = `mongodb+srv://${username}:${password}@mern.jucmp8x.mongodb.net/${DBname}?retryWrites=true&w=majority`;
mongoose.connect(databaseURL)
.then((data) => {
    console.log("Connected To The MERN Database!");
    // Making the server to listen on port after we get connected to our database
    app.listen(8181);
    console.log("Server Live On Port 8181");
})
.catch((error) => {
    console.log("Error Connecting With The Database Or Localhost!");
});


// Using EJS view engine to insert dynamic content into my webpage
app.set('view engine', 'ejs');


// Defining a middleware which will run on each request but we'll use next function in order to force execution of code written after it as by default program stops executing after encountering any middleware
app.use((request, response, next) => {
    console.log("New Request Made!");
    console.log("Host : ", request.hostname);
    console.log("Path : ", request.path);
    console.log("Method : ", request.method);
    next();
});


// Defining the routes in express using render method of EJS view engine and sending dynamic object title with it to the home page
app.get('/', (request, response) => {
    response.render('home', {title : 'Home'});
});
app.get('/about', (request, response) => {
    response.render('about', {title : 'About'});
});
app.get('/view-contacts', (request, response) => {
    response.render('viewContacts', {title : 'All Contacts'});
});
app.get('/create-contact', (request, response) => {
    // Creating an object of Contact type and saving to the database
    const contact = new Contact({
        fullName : "Chaitya Khanna",
        homeTown : "Bikaner, Rajasthan",
        phoneNumber : "+91-7014521576",
        emailAddress : "chaityakhanna@gmail.com"
    });
    contact.save()
    .then((data) => {
        response.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
    // response.render('addContacts', {title : 'Add Contacts'});
});
app.get('/delete-contact', (request, response) => {
    response.render('deleteContact', {title : 'Delete Contacts'});
});
app.get('/modify-contact', (request, response) => {
    response.render('modifyContact', {title : 'Modify Contacts'});
});
app.get('/view-contact', (request, response) => {
    response.render('viewContact', {title : 'Single Contact'});
});
app.use((request, response) => {
    response.status(404);
    response.render('404', {title : '404'});
});