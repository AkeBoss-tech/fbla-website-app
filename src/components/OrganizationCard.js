// OrganizationCard.js
import React, { useState } from 'react';

// add optional prop for image
const OrganizationCard = ({ organization, image }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`card mb-3 ${expanded ? 'expanded' : ''}`}>
            <div className="row g-0">
                <div className={image ? "col-md-6" : "col-md-12"}>
                    <div className="card-body">
                        <a href={`/partner/${organization.id}`}>
                            <h5 className="card-title">{organization.name}</h5>
                        </a>
                        <p className="card-text">{organization.type}</p>
                        <p className="card-text">Number of Employees: {organization.numberOfEmployees}</p>
                        
                        <p className="card-text">Resources: {organization.resources.join(', ')}</p>
                        {expanded && (
                            <>
                                {/* Additional organization details */}
                                <p className="card-text">Contact: {organization.contact.name}</p>
                                <p className="card-text">Email: {organization.contact.email}</p>
                                <p className="card-text">Phone: {organization.contact.phone}</p>
                                {/* Add more organization details as needed */}
                            </>
                        )}
                        <button
                            className="btn btn-outline-dark"
                            onClick={handleToggleExpand}
                        >
                            {expanded ? 'Less Information' : 'More Information'}
                        </button>
                    </div>
                </div>
                {/* Image on the right side for larger screens */}
                {image
                    ? <div className="col-md-6 d-none d-md-block">
                    <div className="image-container h-100">
                        <img
                            /* check if image is path or link */
                            src={organization.imagePath.includes('http') ? organization.imagePath : `images/${organization.imagePath}`}
                            alt={organization.name}
                            className="img-fluid h-100 w-100 object-fit-cover"
                        />
                    </div>
                </div>
                : null
                }
                
            </div>
        </div>
    );
};

export default OrganizationCard;
