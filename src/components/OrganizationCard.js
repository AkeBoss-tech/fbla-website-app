import React, { useState } from 'react';
import '../App.css'; // Create a CSS file for custom styling

const OrganizationCard = ({ organization, image }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`card mb-4 ${expanded ? 'expanded' : ''} organization-card`}>
            <div className="row g-0">
                <div className={image ? 'col-md-6' : 'col-md-12'}>
                    <div className="card-body">
                        <a href={`/partner/${organization.id}`} className="text-decoration-none">
                            <h5 className="card-title">{organization.name}</h5>
                        </a>
                        <p className="card-text">Categories: {organization.category.join(', ')}</p>
                        {expanded && (
                            <>
                                <p className="card-text">Contact: {organization.address}</p>
                                <p className="card-text"><a href={organization.website} className="text-dark">Website</a></p>
                                <p className="card-text">Phone: {organization.phone}</p>
                                {/* Add more organization details as needed */}
                            </>
                        )}
                        <button
                            className={`btn btn-${expanded ? 'secondary' : 'primary'}`}
                            onClick={handleToggleExpand}
                        >
                            {expanded ? 'Less Information' : 'More Information'}
                        </button>
                    </div>
                </div>
                {image && (
                    <div className="col-md-6">
                        <div className="image-container">
                            <img
                                src={organization.logo.includes('http') ? organization.logo : `images/${organization.logo}`}
                                alt={organization.name}
                                className="img-fluid h-100 w-100 object-fit-cover rounded-end"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrganizationCard;
