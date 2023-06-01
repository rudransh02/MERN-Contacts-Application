import Home from "./Pages/Home";
import CreateContact from "./Pages/CreateContact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewContact from "./Pages/ViewContact";
import ModifyContact from "./Pages/ModifyContact";
import { useState } from "react";



function App() {
    const [c, setC] = useState({fullName : " ",
                                homeTown : " ",
                                phoneNumber : " ",
                                emailAddress : " "});

    const handleContacts = (data) => {
        setC(data);
    };
    
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path = "/" element = {<Home />}></Route>
                    <Route exact path = "/create-contact" element = {<CreateContact />}></Route>
                    <Route exact path = "/view-contact/:id" element = {<ViewContact handleContacts = {handleContacts}  />}></Route>
                    <Route exact path = "/modify-contact/:id" element = {<ModifyContact c = {c} />}></Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;