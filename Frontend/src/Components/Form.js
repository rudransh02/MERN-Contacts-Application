import { Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Form = () => {
    // Defining the states to store the input from the form
    const [fullName, setfullName] = useState(null);
    const [homeTown, sethomeTown] = useState(null);
    const [phoneNumber, setphoneNumber] = useState(null);
    const [emailAddress, setemailAddress] = useState(null);
    const navigate = useNavigate();



    // Function to store the data from the input fields from the form into their respective variables
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



    // Function to save the contact data object to the database by making a POST request to the backend
    const handleClick = () => {
        const data = {
            "fullName": fullName,
            "homeTown": homeTown,
            "phoneNumber": phoneNumber,
            "emailAddress": emailAddress,
        };
        fetch('http://localhost:8181/create-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response.json());
            // Navigate function is used instead of redirect and href in order to provide native feel and render the components without sending a request back to the server
            navigate('/');
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
                <TextField InputLabelProps={{ style: { color: "#D5DEF5"}}} inputProps={{ style: { color: "#D5DEF5" }}} onChange={handleChange} name="fullName" fullWidth id="standard-basic" label="Full Name" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField InputLabelProps={{ style: { color: "#D5DEF5"}}} inputProps={{ style: { color: "#D5DEF5" }}} onChange={handleChange} name="hometown" fullWidth id="standard-basic" label="Hometown" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField InputLabelProps={{ style: { color: "#D5DEF5"}}} inputProps={{ style: { color: "#D5DEF5" }}} onChange={handleChange} name="phoneNumber" fullWidth id="standard-basic" label="Contact Number" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField InputLabelProps={{ style: { color: "#D5DEF5"}}} inputProps={{ style: { color: "#D5DEF5" }}} onChange={handleChange} name="emailAddress" fullWidth id="standard-basic" label="Email Address" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <Button onClick={handleClick} size="large" variant="outlined">Create Contact</Button>
            </center>
        </div>
    );
}
 
export default Form;