import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>Fruiton</h2>
                    <p>Freshness packed with love ❤️</p>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <div className="contact-item">
                        <span className="icon">📞</span>
                        <a href="tel:+919918030600">+91 9918030600</a>
                    </div>
                    <div className="contact-item">
                        <span className="icon">📷</span>
                        <a href="https://instagram.com/fruiton.india" target="_blank" rel="noreferrer">@fruiton.india</a>
                    </div>
                    <div className="contact-item">
                        <span className="icon">📍</span>
                        <span>Gurukul Library, Sahadatpura, Mau</span>
                    </div>
                </div>

                <div className="footer-cta">
                    <h3>Order Now</h3>
                    <p>Order your healthy fruit salad today!</p>
                    <a href="https://wa.me/919918030600" className="btn btn-whatsapp">
                        Order on WhatsApp 🚀
                    </a>
                </div>
            </div>
            <div className="copyright">
                © 2025 Fruiton. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
