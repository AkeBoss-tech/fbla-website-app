// SearchLayout.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterLayout from './FilterLayout';
import OrganizationCard from './OrganizationCard';

const SearchLayout = ({ organizationsData }) => {
    const [filters, setFilters] = useState({ types: [], resources: [] });
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState('numberOfEmployees'); // Default sorting by number of employees
    const [sortOrderAsc, setSortOrderAsc] = useState(true); // Default sorting in ascending order

    const location = useLocation();

    useEffect(() => {
        // Extract the 'keywords' parameter from the URL
        const searchParams = new URLSearchParams(location.search);
        const keywords = searchParams.get('keywords') || '';
        setSearchText(decodeURIComponent(keywords));
    }, [location.search]);

    const types = Array.from(new Set(organizationsData.map((org) => org.type)));
    const resources = Array.from(new Set(organizationsData.flatMap((org) => org.resources)));

    const compareFunction = (a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (valueA < valueB) {
            return sortOrderAsc ? -1 : 1;
        }
        if (valueA > valueB) {
            return sortOrderAsc ? 1 : -1;
        }
        return 0;
    };

    const filteredOrganizations = organizationsData
        .filter(
            (organization) =>
                (filters.types.length === 0 || filters.types.includes(organization.type)) &&
                (filters.resources.length === 0 || organization.resources.some((res) => filters.resources.includes(res))) &&
                (searchText === '' ||
                    organization.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    organization.type.toLowerCase().includes(searchText.toLowerCase()) ||
                    organization.resources.some((res) => res.toLowerCase().includes(searchText.toLowerCase())) ||
                    organization.contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    organization.contact.email.toLowerCase().includes(searchText.toLowerCase()) ||
                    organization.contact.phone.toLowerCase().includes(searchText.toLowerCase()))
        )
        .sort(compareFunction);

    const handleFilterChange = ({ types, resources }) => {
        setFilters({ types, resources });
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleToggleSortOrder = () => {
        setSortOrderAsc(!sortOrderAsc);
    };

    return (
        <div className="search-layout container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Search</h1>
                </div>
                {/* Search box */}
                <div className="col-md-12">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Keywords"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                {/* Filter Layout */}
                <div className="col-md-3">
                    <FilterLayout types={types} resources={resources} onFilterChange={handleFilterChange} />
                </div>

                {/* Sort and Organizations Layout */}
                <div className="col-md-9">
                    <div className="d-flex justify-content-between mb-0">
                        <div className="form-group">
                            <label htmlFor="sortBy">Sort By:</label>
                            <select
                                className="form-control"
                                id="sortBy"
                                value={sortBy}
                                onChange={handleSortByChange}
                            >
                                <option value="numberOfEmployees">Number of Employees</option>
                                {/* Add more options for other attributes */}
                            </select>
                        </div>
                        <button
                            className="btn btn-outline-dark"
                            onClick={handleToggleSortOrder}
                        >
                            {sortOrderAsc ? (
                                <i className="bi bi-arrow-up"></i>
                            ) : (
                                <i className="bi bi-arrow-down"></i>
                            )}
                            Order
                        </button>
                    </div>
                    <div className="organization-cards">
                        {filteredOrganizations.map((organization) => (
                            <OrganizationCard key={organization.id} organization={organization} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchLayout;
