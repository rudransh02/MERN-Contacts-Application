import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const ModifyForm = ({contactData}) => {
    // Extracting the id from the URL passed by the user
    const { id } = useParams();


    const getById = (id) => {
        for (const key in contactData) {
            if (contactData[key]._id === id) {
                return contactData[key];
            }
        }
    }
    const contact = getById(id);


    const [fullName, setfullName] = useState(contact.fullName);
    const [homeTown, sethomeTown] = useState(contact.homeTown);
    const [phoneNumber, setphoneNumber] = useState(contact.phoneNumber);
    const [emailAddress, setemailAddress] = useState(contact.emailAddress);
    const navigate = useNavigate();



    // Function to store the input values from the form to their respective states
    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === 'fullName')
        {
            setfullName(value);
        }
        else if (name === 'hometown')
        {
            sethomeTown(value);
        }
        else if (name === 'phoneNumber')
        {
            setphoneNumber(value);
        }
        else if (name === 'emailAddress')
        {
            setemailAddress(value);
        }
    };



    // Function to make a PUT request to the backend server in order to modify the current contact to new values based on its ID
    const handleClick = () => {
        const data = {
            "fullName": fullName,
            "homeTown": homeTown,
            "phoneNumber": phoneNumber,
            "emailAddress": emailAddress,
        };

        fetch(`http://localhost:8181/modify-contact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            navigate(`/view-contact/${id}`);
        })
        .catch((error) => {
            console.error(error);
        });
    };
    


    return (
        <div>
            <center>
                <br />
                <br />
                <br />
                <br />
                <TextField InputLabelProps={{ style: { color: "#D5DEF5"}}} inputProps={{ style: { color: "#D5DEF5" }}} onChange={handleChange} value={fullName} name="fullName" fullWidth id="standard-basic" label="Full Name" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField InputLabelProps={{ style: { color: "#D5DEF5"}}} inputProps={{ style: { color: "#D5DEF5" }}} onChange={handleChange} value={homeTown} name="hometown" fullWidth id="standard-basic" label="Hometown" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField InputLabelProps={{ style: { color: "#D5DEF5"}}} inputProps={{ style: { color: "#D5DEF5" }}} onChange={handleChange} value={phoneNumber} name="phoneNumber" fullWidth id="standard-basic" label="Contact Number" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField InputLabelProps={{ style: { color: "#D5DEF5"}}} inputProps={{ style: { color: "#D5DEF5" }}} onChange={handleChange} value={emailAddress} name="emailAddress" fullWidth id="standard-basic" label="Email Address" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <Button sx={{ color: "#D5DEF5", backgroundColor: "#003c66"}} onClick={handleClick} size="large" variant="outlined">Update Contact</Button>
            </center>
        </div>
    );
}
 
export default ModifyForm;