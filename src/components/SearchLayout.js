// SearchLayout.js
import React, { useState } from 'react';
import FilterLayout from './FilterLayout';
import OrganizationCard from './OrganizationCard';


const SearchLayout = ({ organizationsData }) => {
    const [filters, setFilters] = useState({ types: [], resources: [] });

    const types = Array.from(new Set(organizationsData.map((org) => org.type)));
    const resources = Array.from(new Set(organizationsData.flatMap((org) => org.resources)));

    const filteredOrganizations = organizationsData.filter(
        (organization) =>
            (filters.types.length === 0 || filters.types.includes(organization.type)) &&
            (filters.resources.length === 0 || organization.resources.some((res) => filters.resources.includes(res)))
    );

    const handleFilterChange = ({ types, resources }) => {
        setFilters({ types, resources });
    };

    return (
        <div className="search-layout container">
            <div className="row">
                {/* Filter Layout */}
                <div className="col-md-3">
                    <FilterLayout types={types} resources={resources} onFilterChange={handleFilterChange} />
                </div>

                {/* Organizations Layout */}
                <div className="col-md-9">
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
