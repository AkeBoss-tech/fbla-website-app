// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <p>Stay connected on social media:</p>
                        <div className="social-icons">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="mt-3" />
                <div className="text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
