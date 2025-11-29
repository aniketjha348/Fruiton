import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo">
                    <div className="logo-text">
                        <span className="logo-fruit">Fruit</span><span className="logo-on">on</span>
                    </div>
                    <span className="tagline">BEING HEALTHY</span>
                </div>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#benefits" onClick={() => setIsOpen(false)}>Benefits</a>
                    <a href="#plans" onClick={() => setIsOpen(false)}>Plans</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary">Order Now</a>
                </div>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
