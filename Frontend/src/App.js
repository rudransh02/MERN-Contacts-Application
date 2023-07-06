import Home from "./Pages/Home";
import CreateContact from "./Pages/CreateContact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewContact from "./Pages/ViewContact";
import ModifyContact from "./Pages/ModifyContact";
import { useEffect, useState } from "react";



// The main function which contains all the components along with their routes
function App() {
    // State to store the JSON Contact data
    const [contactData, setContactData] = useState({});



    // API Call to bring all contact data at once
    const getContacts = async () => {
        const base = `http://localhost:8181/view-contacts`;
        const response = await fetch(base);
        const data = await response.json();
        if (data) {
            return data;
        }
    };



    // Function Call to get the Contact data
    useEffect(() => {
        getContacts()
            .then((data) => {
                setContactData(data);
            })
            .catch((error) => {
                console.error("Error Getting Data From The Backend API!");
            });
    }, []);



    return (
        <div className="App">
            {/* Defining all the required routes along with thier pages */}
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home contactData = {contactData} />}></Route>
                    <Route exact path="/create-contact" element={<CreateContact />}></Route>
                    {/* Any URL parameter in the format "URL:/" is referred to as a URL parameter which can later be accessed using the URL parser package */}
                    <Route exact path="/view-contact/:id" element={<ViewContact contactData={contactData} />}></Route>
                    {/* Passing the states and functions as props to the children components */}
                    <Route exact path="/modify-contact/:id" element={<ModifyContact contactData={contactData} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;