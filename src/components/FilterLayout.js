// FilterLayout.js
import React, { useState } from 'react';

const FilterLayout = ({ types, resources, onFilterChange }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedResources, setSelectedResources] = useState([]);

    const handleTypeChange = (type) => {
        const updatedTypes = [...selectedTypes];
        if (updatedTypes.includes(type)) {
            // Remove type if already selected
            updatedTypes.splice(updatedTypes.indexOf(type), 1);
        } else {
            // Add type if not selected
            updatedTypes.push(type);
        }

        setSelectedTypes(updatedTypes);
        onFilterChange({ types: updatedTypes, resources: selectedResources });
    };

    const handleResourceChange = (resource) => {
        const updatedResources = [...selectedResources];
        if (updatedResources.includes(resource)) {
            // Remove resource if already selected
            updatedResources.splice(updatedResources.indexOf(resource), 1);
        } else {
            // Add resource if not selected
            updatedResources.push(resource);
        }

        setSelectedResources(updatedResources);
        onFilterChange({ types: selectedTypes, resources: updatedResources });
    };

    return (
        <div className="filters">
            <h4>Filters</h4>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filterAllCategories"
                    checked={selectedTypes.length === 0}
                    onChange={() => {
                        setSelectedTypes([]);
                        onFilterChange({ types: [], resources: selectedResources });
                    }}
                />
                <label className="form-check-label" htmlFor="filterAllCategories">
                    All Categories
                </label>
            </div>
            {types.map((type) => (
                <div className="form-check" key={type}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={type}
                        id={`filter${type}`}
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeChange(type)}
                    />
                    <label className="form-check-label" htmlFor={`filter${type}`}>
                        {type}
                    </label>
                </div>
            ))}
            <div className="form-check mt-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filterAllResources"
                    checked={selectedResources.length === 0}
                    onChange={() => {
                        setSelectedResources([]);
                        onFilterChange({ types: selectedTypes, resources: [] });
                    }}
                />
                <label className="form-check-label" htmlFor="filterAllResources">
                    All Resources
                </label>
            </div>
            {resources.map((resource) => (
                <div className="form-check" key={resource}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={resource}
                        id={`filter${resource}`}
                        checked={selectedResources.includes(resource)}
                        onChange={() => handleResourceChange(resource)}
                    />
                    <label className="form-check-label" htmlFor={`filter${resource}`}>
                        {resource}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default FilterLayout;
