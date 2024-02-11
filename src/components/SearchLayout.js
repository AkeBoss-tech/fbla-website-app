// SearchLayout.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import FilterLayout from './FilterLayout';
import OrganizationCard from './OrganizationCard';

const SearchLayout = ({ organizationsData }) => {
    const [filters, setFilters] = useState({ categories: [], keywordFilter: true });
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState('name'); // Default sorting by number of employees
    const [sortOrderAsc, setSortOrderAsc] = useState(true); // Default sorting in ascending order

    const location = useLocation();

    useEffect(() => {
        // Extract the 'keywords' parameter from the URL
        const searchParams = new URLSearchParams(location.search);
        const keywords = searchParams.get('keywords') || '';
        setSearchText(decodeURIComponent(keywords));
    }, [location.search]);

    const categories = Array.from(new Set(organizationsData.flatMap((org) => org.category)));

    const history = useNavigate();

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
            (filters.categories.length === 0 || organization.category.some((res) => filters.categories.includes(res))) &&
            (!filters.keywordFilter || // Check if keyword filter is enabled
                searchText === '' ||
                organization.name.toLowerCase().includes(searchText.toLowerCase()) ||
                organization.address.toLowerCase().includes(searchText.toLowerCase()) ||
                organization.category.some((res) => res.toLowerCase().includes(searchText.toLowerCase())) ||
                organization.about.toLowerCase().includes(searchText.toLowerCase()) ||
                organization.website.toLowerCase().includes(searchText.toLowerCase()) ||
                organization.contact_info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                organization.contact_info.title.toLowerCase().includes(searchText.toLowerCase()))
    )
    .sort(compareFunction);


    const handleFilterChange = ({ categories, keywordFilter }) => {
        setFilters({ categories, keywordFilter });
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        // Update 'keywords' parameter in the URL
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('keywords', encodeURIComponent(event.target.value));
        history(`?${searchParams.toString()}`);
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
                    <FilterLayout categories={categories} onFilterChange={handleFilterChange} />
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
                                <option value="name">Name</option>
                                <option value="distance">Distance</option>
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
                            <OrganizationCard key={organization.id} organization={organization} image={true} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchLayout;
