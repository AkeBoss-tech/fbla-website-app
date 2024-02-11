import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Resources() {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h1>Resources</h1>

                <p>
                    Welcome to our resources page where you can find helpful links and information.
                </p>

                <h2>Useful Links</h2>
                <ul>
                    <li>
                        <a href="https://www.example.com">Example Website</a> - A useful resource for...
                    </li>
                    <li>
                        <a href="https://www.resources.com">Resources Hub</a> - Access various resources related to...
                    </li>
                    <li>
                        <a href="https://www.learnmore.org">Learn More</a> - Expand your knowledge on...
                    </li>
                </ul>

                <h2>Additional Information</h2>
                <p>
                    Here are some additional resources and information that might be helpful:
                </p>
                <ul>
                    <li>
                        <a href="https://www.example.org">Example Organization</a> - Learn about the work of...
                    </li>
                    <li>
                        <a href="https://www.communitysupport.com">Community Support</a> - Find support services for...
                    </li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions or suggestions regarding our resources, please feel free to contact us at <a href="mailto:resources@yourwebsite.com">resources@yourwebsite.com</a>.
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default Resources;
