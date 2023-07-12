import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Button } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import "./Components.css";

const ContactDetails = ({ contact, id }) => {
    const navigate = useNavigate();



    // Function to delete the contact by the ID element destructured from the passed prop
    const handleClick = async () => {
        fetch(`http://localhost:8181/delete-contact/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    };



    // Function to take the user to the edit contact page based on the present contact ID which was passed by the parent as a prop
    const handleEdit = () => {
        navigate(`/modify-contact/${id}`);
    }


    return (
        <div className='details'>
            <h1>Details</h1>
            <Button onClick={handleEdit}>
                <EditOutlinedIcon />
            </Button>
            <Button onClick={handleClick}>
                <DeleteForeverOutlinedIcon />
            </Button>
            {/* Rendering the data from the object which was passed as a prop */}
            <h2>{contact && contact.fullName}</h2>
            <h2>{contact && contact.homeTown}</h2>
            <h2>{contact && contact.phoneNumber}</h2>
            <h2>{contact && contact.emailAddress}</h2>
        </div>
    );
}

export default ContactDetails;