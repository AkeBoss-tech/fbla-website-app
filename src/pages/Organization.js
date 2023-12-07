// Organization.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../components/Section';

const Organization = ({ partners }) => {
    const { id } = useParams();
    const partner = partners.find(p => p.id === parseInt(id, 10));

    if (!partner) {
        return <div>Partner not found</div>;
    }

    return (
        <Section margin="2">
            <h2>{partner.name}</h2>
            <p>Type: {partner.type}</p>
            <p>Resources: {partner.resources.join(', ')}</p>
            <p>Contact: {partner.contact.name} - {partner.contact.email} - {partner.contact.phone}</p>
        </Section>
    );
};

export default Organization;
