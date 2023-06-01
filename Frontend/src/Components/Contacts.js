import * as React from 'react';
import { useState } from "react";
import ContactCard from './ContactCard';

export default function Contacts() {
    // Funtion that makes an API call and brings in all the contacts from the backend server
    const getContactById = async () => {
        const base = `http://localhost:8181/view-contacts`;
        const response = await fetch(base);
        const data = await response.json();
        return data;
    };



    // State named contacts in order to store the data brought by the API call
    const [contacts, setContacts] = useState(null);
    getContactById()
    .then((data) => {
        setContacts(data);
    })
    .catch((error) => {
        console.log(error);
    })
    
    return (
        <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
            gap: '10px',
            marginTop: '10px'
        }}
        >
            // Conditional rendering is used with the map function in order to iterate over the contacts array and then passing single contact one by one to another component
            {contacts && contacts.map(contact=><ContactCard contact = {contact} key={contact._id} />)}
        </div>
    );
};