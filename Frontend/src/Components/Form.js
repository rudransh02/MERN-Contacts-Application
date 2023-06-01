import { Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Form = () => {
    const [fullName, setfullName] = useState(null);
    const [homeTown, sethomeTown] = useState(null);
    const [phoneNumber, setphoneNumber] = useState(null);
    const [emailAddress, setemailAddress] = useState(null);
    const navigate = useNavigate();
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

    const handleClick = () => {
        const data = {
            "fullName": fullName,
            "homeTown": homeTown,
            "phoneNumber": phoneNumber,
            "emailAddress": emailAddress,
        };

        console.log(data);

        fetch('http://localhost:8181/create-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response.json());
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
                <TextField onChange={handleChange} name="fullName" fullWidth id="standard-basic" label="Full Name" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField onChange={handleChange} name="hometown" fullWidth id="standard-basic" label="Hometown" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField onChange={handleChange} name="phoneNumber" fullWidth id="standard-basic" label="Contact Number" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField onChange={handleChange} name="emailAddress" fullWidth id="standard-basic" label="Email Address" variant="standard" />
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