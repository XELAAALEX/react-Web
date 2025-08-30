import React from 'react';

/**
 * Footer Component
 * Application footer with copyright and navigation links
 * Responsive design that stacks vertically on mobile devices
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                    <a href="#careers">Careers</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;