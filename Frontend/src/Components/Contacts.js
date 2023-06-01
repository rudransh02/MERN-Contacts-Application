import * as React from 'react';
import { useState } from "react";
import ContactCard from './ContactCard';

export default function Contacts() {
    const getContactById = async () => {
        const base = `http://localhost:8181/view-contacts`;
        const response = await fetch(base);
        const data = await response.json();
        return data;
    };

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
            {contacts && contacts.map(contact=><ContactCard contact = {contact} key={contact._id} />)}
        </div>
    );
};