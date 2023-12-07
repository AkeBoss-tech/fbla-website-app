// OrganizationCard.js
import React from 'react';

const OrganizationCard = ({ organization }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{organization.name}</h5>
                <p className="card-text">{organization.type}</p>
                <p className="card-text">Contact: {organization.contact.name}</p>
                <p className="card-text">Email: {organization.contact.email}</p>
                <p className="card-text">Phone: {organization.contact.phone}</p>
                <p className="card-text">Resources: {organization.resources.join(', ')}</p>
                {/* Add more organization details as needed */}
            </div>
        </div>
    );
};

export default OrganizationCard;
