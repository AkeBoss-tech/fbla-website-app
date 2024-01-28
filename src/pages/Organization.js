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
            <div className="container mt-5">
                <h2>{partner.name}</h2>
                <img
                    /* check if image is path or link */
                    src={partner.imagePath.includes('http') ? partner.imagePath : `images/${partner.imagePath}`}
                    alt={partner.name}
                    className="img-fluid h-100 w-100 object-fit-cover"
                />
                <p>Type: {partner.type}</p>
                <p>Resources: {partner.resources.join(', ')}</p>
                <p>Contact: {partner.contact.name} - <a href='mailto:${partner.contact.email}'>{partner.contact.email}</a> - {partner.contact.phone}</p>
                <p>Employees: {partner.numberOfEmployees}</p>

                {/* Additional Information */}
                {/* Add more details about the organization as needed */}
                <p>Number of Employees: {partner.numberOfEmployees}</p>
                <br></br>
                
            </div>
            {/* Carousel with Related Organizations */}
            <div className="related-organizations-carousel-container">
                <h3>Related Organizations</h3>
                <Carousel>
                    {relatedOrganizations.map((org) => (
                        <div className="p-2"><OrganizationCard organization={org} smallerSize={true} image={false} /></div>
                    ))}
                </Carousel>
            </div>
            <Footer />
        </>
    );
};

export default Organization;
