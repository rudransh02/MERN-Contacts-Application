import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const ModifyForm = ({c}) => {
    const { id } = useParams();
    const [fullName, setfullName] = useState(c.fullName);
    const [homeTown, sethomeTown] = useState(c.homeTown);
    const [phoneNumber, setphoneNumber] = useState(c.phoneNumber);
    const [emailAddress, setemailAddress] = useState(c.emailAddress);
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

        fetch(`http://localhost:8181/modify-contact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response.json());
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
                <TextField onChange={handleChange} value={fullName} name="fullName" fullWidth id="standard-basic" label="Full Name" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField onChange={handleChange} value={homeTown} name="hometown" fullWidth id="standard-basic" label="Hometown" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField onChange={handleChange} value={phoneNumber} name="phoneNumber" fullWidth id="standard-basic" label="Contact Number" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <TextField onChange={handleChange} value={emailAddress} name="emailAddress" fullWidth id="standard-basic" label="Email Address" variant="standard" />
                <br />
                <br />
                <br />
                <br />
                <Button onClick={handleClick} size="large" variant="outlined">Update Contact</Button>
            </center>
        </div>
    );
}
 
export default ModifyForm;