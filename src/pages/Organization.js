// Organization.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OrganizationCard from '../components/OrganizationCard';
import Carousel from '../components/Carousel';

const Organization = ({ partners }) => {
    const { id } = useParams();
    const partner = partners.find((p) => p.id === parseInt(id, 10));

    if (!partner) {
        return <div>Partner not found</div>;
    }

    // Filter out the current organization from related organizations
    const relatedOrganizations = partners.filter((p) => p.id !== partner.id).slice(0, 5); // Limit to 5 organizations

    return (
        <>
            <Navbar />
            <Section margin="2">
                <h2>{partner.name}</h2>
                <p>Type: {partner.type}</p>
                <p>Resources: {partner.resources.join(', ')}</p>
                <p>Contact: {partner.contact.name} - {partner.contact.email} - {partner.contact.phone}</p>

                {/* Additional Information */}
                {/* Add more details about the organization as needed */}
                <p>Number of Employees: {partner.numberOfEmployees}</p>

                {/* Carousel with Related Organizations */}
                <div className="related-organizations-carousel-container">
                    <h3>Related Organizations</h3>
                    <Carousel>
                        {[partner, ...relatedOrganizations].map((org) => (
                            <OrganizationCard key={org.id} organization={org} smallerSize={true} style={{ maxWidth: '20px' }} />
                        ))}
                    </Carousel>
                </div>
            </Section>
            <Footer />
        </>
    );
};

export default Organization;
