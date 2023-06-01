import Home from "./Pages/Home";
import CreateContact from "./Pages/CreateContact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewContact from "./Pages/ViewContact";
import ModifyContact from "./Pages/ModifyContact";
import { useState } from "react";



// The main function which contains all the components along with their routes
function App() {
    const [contactData, setContactData] = useState({fullName : " ",
                                homeTown : " ",
                                phoneNumber : " ",
                                emailAddress : " "});
    
    // Creating a function in order to pass it as a prop
    const handleContacts = (data) => {
        setContactData(data);
    };
    
    return (
        <div className="App">
            // Defining all the required routes along with thier pages
            <BrowserRouter>
                <Routes>
                    <Route exact path = "/" element = {<Home />}></Route>
                    <Route exact path = "/create-contact" element = {<CreateContact />}></Route>
                    // Any URL parameter in the format "URL:/" is referred to as a URL parameter which can later be accessed using the URL parser package
                    <Route exact path = "/view-contact/:id" element = {<ViewContact handleContacts = {handleContacts}  />}></Route>
                    // Passing the states and functions as props to the children components
                    <Route exact path = "/modify-contact/:id" element = {<ModifyContact contactData = {contactData} />}></Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;