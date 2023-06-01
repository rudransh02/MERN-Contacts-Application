// Requiring all the necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/contacts');
const bodyParser = require('body-parser');



// Creating an express app
const app = express();


// Cross Origin Resource Sharing is a security feature built into browsers that ensures that web pages from one domain are not able to make requests to another domain unless the second domain explicitly allows it so we're allowing it explicitly here
app.use(cors());


// Inbuilt express function to parse(break down) a structured URL encoded data submitted in the body of a request which is used by Postman Software to test APIs
app.use(express.urlencoded());

// Seperate middleware used to parse(break down) a JSON payload encoded data which is used by the React to make API requests
app.use(bodyParser.json());



// Defining the required variables for the database
const username = "localhost";
const password = "localhost";
const DBname = "MERN";



// Using EJS view engine to insert dynamic content into my webpage
app.set('view engine', 'ejs');



// Connecting to our MongoDB's Contact database
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



// Defining a middleware which will run on each request but we'll use next function in order to force execution of code written after it as by default program stops executing after encountering any middleware
app.use((request, response, next) => {
    console.log("New Request Made!");
    console.log("Host : ", request.hostname);
    console.log("Path : ", request.path);
    console.log("Method : ", request.method);
    next();
});



// Defining a GET request in order to serve all the contacts present in the database
app.get('/view-contacts', (request, response) => {
    Contact.find()
    .then((data) => {
        response.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
});



// Defining a POST request in order to make entries in the contact database
app.post('/create-contact', (request, response) => {
    const contact = new Contact(request.body);
    // console.log(request.body);
    contact.save()
    .then((data) => {
        response.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
});



// Defining a GET request in order to fetch contact data using the transaction ID
app.get('/view-contacts/:id', (request, response) => {
    const id = request.params.id;
    Contact.findById(id)
    .then((data) => {
        response.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
});



// Defining a DELETE request in order to delete data from the database using the transaction ID
app.delete('/delete-contact/:id', (request, response) => {
    const id = request.params.id;
    Contact.findByIdAndDelete(id)
    .then((data) => {
        response.send("dsds");
    })
    .catch((error) => {
        console.log(error);
    });
});



// Defining a PUT request in order to modify a particular contact data using the transaction ID
app.put('/modify-contact/:id', (request, response) => {
    const id = request.params.id;
    const newData = request.body;
    Contact.updateOne({_id: id}, newData)
    .then((data) => {
        response.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
});



// Defining a 404 request in order to serve all the invalid URL requests
app.use((request, response) => {
    response.status(404);
    response.render('404', {title : '404'});
});