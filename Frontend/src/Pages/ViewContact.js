import ContactDetails from '../Components/ContactDetails';
import NavbarWithContactsButton from '../Components/NavbarWithContactsButton'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewContact = ({handleContacts}) => {
    // Accessing the unique contact ID in order to make a GET request to the backend server to fetch the data of that particular ID
    const { id } = useParams();
    const getContactById = async () => {
        const base = `http://localhost:8181/view-contacts/${id}`;
        const response = await fetch(base);
        const data = await response.json();
        if (data)
        {
            return data;
        }
    };



    // Calling the above defined function and passing the data into the states and to the props which was passed by the parent component
    const [contacts, setContacts] = useState(null);
    getContactById()
    .then((data) => {
        handleContacts(data);
        setContacts(data);
    })
    .catch((error) => {
        console.log(error);
    });
    
    

    return (
        <div className="viewSingleContact">
            // Navbar component with a Contacts button to navigate the user back to the homepage
            <NavbarWithContactsButton />
            <center>
                <h1>View Single Contact Route</h1>
                // Component containing the edit and delete page of a particular contact
                <ContactDetails contacts = {contacts} />
            </center>
        </div>
    );
}
 
export default ViewContact;