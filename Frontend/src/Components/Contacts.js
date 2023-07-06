import * as React from 'react';
import { useState, useEffect } from "react";
import ContactCard from './ContactCard';

export default function Contacts({ contactData }) {

    // State named contacts in order to store the data brought by the API call
    const [contacts, setContacts] = useState(null);
    useEffect(() => {
        if (contactData) {
            // Converting the JSON object into an array to iterate over it using the map function
            setContacts(Object.values(contactData));
        }
    }, [contactData]);



    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
                gap: '10px',
                marginTop: '10px'
            }}
        >
            {/* Conditional rendering is used with the map function in order to iterate over the contacts array and then passing single contact one by one to another component */}
            {contacts && contacts.map(contact => <ContactCard contact={contact} key={contact._id} />)}
        </div>
    );
};