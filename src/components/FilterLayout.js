import React, { useState } from 'react';

const FilterLayout = ({ categories, onFilterChange }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [keywordFilter, setKeywordFilter] = useState(true);
    const [addressFilter, setAddressFilter] = useState('any'); // Default to 'Any'
 
    const handleResourceChange = (resource) => {
        const updatedCategories = toggleFilter(selectedCategories, resource);
        setSelectedCategories(updatedCategories);
        onFilterChange({ categories: updatedCategories, keywordFilter, hasAddressFilter: addressFilter });
    };

    const toggleFilter = (selectedFilters, filter) => {
        return selectedFilters.includes(filter)
            ? selectedFilters.filter((selected) => selected !== filter)
            : [...selectedFilters, filter];
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
        onFilterChange({ categories: [], keywordFilter: true, hasAddressFilter: addressFilter });
    };

    const handleKeywordFilterChange = (event) => {
        setKeywordFilter(event.target.checked);
        onFilterChange({ categories: selectedCategories, keywordFilter: event.target.checked, hasAddressFilter: addressFilter});
    };

    const handleAddressFilterChange = (event) => {
        setAddressFilter (event.target.checked);
        onFilterChange({
            categories: selectedCategories,
            keywordFilter,
            hasAddressFilter: event.target.checked,
        });
    };    

    return (
        <div className="filters">
            {/* Selected Filters Section */}
            {/* Only add if filters are present */}
            { selectedCategories.length > 0 || keywordFilter
                ? <div className="selected-filters mb-4">
                <h3>Selected Filters</h3>
                {selectedCategories.map((resource) => (
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
            {/* <div className="form-group mt-3">
                <label htmlFor="addressFilter">Address Filter:</label>
                <select
                    className="form-control"
                    id="addressFilter"
                    value={addressFilter}
                    onChange={handleAddressFilterChange}
                >
                    <option value="any">Any</option>
                    <option value="hasAddress">Has Address</option>
                    <option value="noAddress">No Address</option>
                </select>
            </div> */} 

            <div className="form-check mt-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filterAllCategories"
                    checked={selectedCategories.length === 0}
                    onChange={() => {
                        setSelectedCategories([]);
                        onFilterChange({ categories: [] });
                    }}
                />
                <label className="form-check-label" htmlFor="filterAllCategories">
                    All Categories
                </label>
            </div>
            {categories.map((resource) => (
                <div className="form-check" key={resource}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={resource}
                        id={`filter${resource}`}
                        checked={selectedCategories.includes(resource)}
                        onChange={() => handleResourceChange(resource)}
                    />
                    <label className="form-check-label" htmlFor={`filter${resource}`}>
                        {resource}
                    </label>
                </div>
            ))}
            <button
                className="btn btn-outline-danger mt-3"
                onClick={clearAllFilters}
            >
                Clear All Filters
            </button>
        </div>
    );
};

export default FilterLayout;
