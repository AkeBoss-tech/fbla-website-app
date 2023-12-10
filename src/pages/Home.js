import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import OrganizationCard from "../components/OrganizationCard";

function Home({ partners }) {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const relatedOrganizations = partners.slice(0, 5); // Limit to 5 organizations

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 mx-auto text-center">
                        <h1>Welcome to Organizations Near You</h1>
                        <p className="lead">Discover and connect with local organizations that match your interests.</p>

                        {/* Search Box */}
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for organizations..."
                                aria-label="Search"
                                aria-describedby="button-addon2"
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                            <Link to={`/search?keywords=${encodeURIComponent(searchText)}`} className="btn btn-primary" role="button" id="button-addon2">
                                Search
                            </Link>
                        </div>

                        {/* Additional Information */}
                        <div className="my-5">
                            <h3>Why Choose Us?</h3>
                            <p>
                                Organizations Near You helps you find and engage with local nonprofits and businesses that align with your passions.
                                Whether you're interested in volunteering, internships, or collaboration, we've got you covered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Section */}
            {/* Carousel with Related Organizations */}
            <div className="related-organizations-carousel-container">
                    <h3>Related Organizations</h3>
                    <Carousel>
                        {relatedOrganizations.map((org) => (
                            <div className="p-2"><OrganizationCard organization={org} smallerSize={true} /></div>
                            
                        ))}
                    </Carousel>
                </div>

            <Footer />
        </div>
    );
}

export default Home;
