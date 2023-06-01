import ContactDetails from '../Components/ContactDetails';
import NavbarWithContactsButton from '../Components/NavbarWithContactsButton'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewContact = ({handleContacts}) => {
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
            <NavbarWithContactsButton />
            <center>
                <h1>View Single Contact Route</h1>
                <ContactDetails contacts = {contacts} />
            </center>
        </div>
    );
}
 
export default ViewContact;