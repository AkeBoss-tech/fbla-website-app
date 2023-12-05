// Search.js
import React from 'react';
import { Link } from 'react-router-dom';

const Search = ({ partners }) => {
    return (
        <div>
            <h2>Partners List</h2>
            <ul>
                {partners.map(partner => (
                    <li key={partner.id}>
                        <Link to={`/partner/${partner.id}`}>{partner.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
