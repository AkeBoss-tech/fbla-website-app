import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h1>About Us</h1>

                <p>
                    Welcome to our FBLA project, an initiative aimed at creating a platform to connect organizations and individuals for a positive impact on our community.
                </p>

                <h2>Our Mission</h2>
                <p>
                    Our mission is to foster collaboration between non-profit organizations and businesses, making it easier for them to find and provide support to each other. We believe that by facilitating these connections, we can contribute to the growth and well-being of our community.
                </p>

                <h2>Key Features</h2>
                <ul>
                    <li>
                        <strong>Search:</strong> Use our powerful search functionality to find organizations based on type, categories, and more.
                    </li>
                    <li>
                        <strong>Filters:</strong> Narrow down your search with filters for organization types and available categories.
                    </li>
                    <li>
                        <strong>Sorting:</strong> Sort organizations based on attributes like the number of employees for better relevance.
                    </li>
                    <li>
                        <strong>Information Cards:</strong> Get detailed information about each organization, including contact details and available categories.
                    </li>
                    <li>
                        <strong>Responsive Design:</strong> Our website is designed to work seamlessly on various devices, ensuring accessibility for all users.
                    </li>
                </ul>

                <h2>Impact</h2>
                <p>
                    By creating a centralized hub for organizations, businesses, and individuals, we aim to streamline the process of collaboration and support. This platform empowers entities to discover, connect, and work together for the betterment of our community.
                </p>

                <h2>Contact Us</h2>
                <p>
                    Have questions or suggestions? Feel free to reach out to us at <a href="mailto:adubey@ucvts.org">info@fblaproject.org</a>.
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default About;
