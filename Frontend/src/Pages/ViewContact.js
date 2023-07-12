import ContactDetails from '../Components/ContactDetails';
import NavbarWithContactsButton from '../Components/NavbarWithContactsButton'
import { useParams } from 'react-router-dom';

const ViewContact = ({ contactData }) => {
    // Accessing the unique contact ID in order to make a GET request to the backend server to fetch the data of that particular ID
    const { id } = useParams();
    const getById = (id) => {
        for (const key in contactData)
        {
            if (contactData[key]._id === id)
            {
                return contactData[key];
            }
        }
    }
    const contact = getById(id);

    

    return (
        <div className="viewSingleContact">
            {/* Navbar component with a Contacts button to navigate the user back to the homepage */}
            <NavbarWithContactsButton />
            <center>
                <h1 style={{ color: "#D5DEF5" }}>View Single Contact Route</h1>
                {/* Component containing the edit and delete page of a particular contact */}
                <ContactDetails contact = {contact} id = {id} />
            </center>
        </div>
    );
}
 
export default ViewContact;