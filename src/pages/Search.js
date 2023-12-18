// Search.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';
import SearchLayout from '../components/SearchLayout';

const Search = ({ partners }) => {
    return (
        <div>
            <Navbar />
            <SearchLayout organizationsData={partners} />
            <Section bgColor="white" margin="2">
            </Section>
            <Footer />
        </div>
    );
};

export default Search;
