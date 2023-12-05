// Organization.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Organization = ({ partners }) => {
    const { id } = useParams();
    const partner = partners.find(p => p.id === parseInt(id, 10));

    if (!partner) {
        return <div>Partner not found</div>;
    }

    return (
        <div>
            <h2>{partner.name}</h2>
            <p>Type: {partner.type}</p>
            <p>Resources: {partner.resources.join(', ')}</p>
            <p>Contact: {partner.contact.name} - {partner.contact.email} - {partner.contact.phone}</p>
        </div>
    );
};

export default Organization;
