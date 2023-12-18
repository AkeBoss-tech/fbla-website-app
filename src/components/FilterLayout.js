// FilterLayout.js
import React, { useState } from 'react';

const FilterLayout = ({ types, resources, onFilterChange }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedResources, setSelectedResources] = useState([]);
    const [keywordFilter, setKeywordFilter] = useState(true);

    const handleTypeChange = (type) => {
        const updatedTypes = toggleFilter(selectedTypes, type);
        setSelectedTypes(updatedTypes);
        onFilterChange({ types: updatedTypes, resources: selectedResources, keywordFilter });
    };

    const handleResourceChange = (resource) => {
        const updatedResources = toggleFilter(selectedResources, resource);
        setSelectedResources(updatedResources);
        onFilterChange({ types: selectedTypes, resources: updatedResources, keywordFilter });
    };

    const toggleFilter = (selectedFilters, filter) => {
        return selectedFilters.includes(filter)
            ? selectedFilters.filter((selected) => selected !== filter)
            : [...selectedFilters, filter];
    };

    const clearAllFilters = () => {
        setSelectedTypes([]);
        setSelectedResources([]);
        onFilterChange({ types: [], resources: [], keywordFilter: true });
    };

    const handleKeywordFilterChange = (event) => {
        setKeywordFilter(event.target.checked);
        onFilterChange({ types: selectedTypes, resources: selectedResources, keywordFilter: event.target.checked });
    };

    return (
        <div className="filters">
            {/* Selected Filters Section */}
            {/* Only add if filters are present */}
            { selectedTypes.length > 0 || selectedResources.length > 0 || keywordFilter
                ? <div className="selected-filters mb-4">
                <h3>Selected Filters</h3>
                {selectedTypes.map((type) => (
                    <div className="selected-filter" key={`selected${type}`}>
                        <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() => handleTypeChange(type)}
                        >
                            {type} <i className="bi bi-x"></i>
                        </button>
                    </div>
                ))}
                {selectedResources.map((resource) => (
                    <div className="selected-filter" key={`selected${resource}`}>
                        <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() => handleResourceChange(resource)}
                        >
                            {resource} <i className="bi bi-x"></i>
                        </button>
                    </div>
                ))}
                {keywordFilter
                    ? <div className="selected-filter" key={`selectedKeyword`}>
                    <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={handleKeywordFilterChange}
                    >
                        Keywords <i className="bi bi-x"></i>
                    </button>
                    </div>
                    : null
                }
            </div>
                : null
            }
            <h3>Filters</h3>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="keywordFilter"
                    checked={keywordFilter}
                    onChange={handleKeywordFilterChange}
                />
                <label className="form-check-label" htmlFor="keywordFilter">
                    Keywords
                </label>
            </div>
            <div className="form-check mt-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filterAllCategories"
                    checked={selectedTypes.length === 0}
                    onChange={clearAllFilters}
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
