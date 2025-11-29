import React from 'react';
import './Hero.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
    useScrollAnimation();

    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <h1 className="hero-title animate-on-scroll">
                    <span className="font-mix">Mix</span> <span className="font-fruit">fruit</span>
                    <div className="font-salad">SALAD</div>
                </h1>

                <div className="hero-content animate-on-scroll delay-200">
                    <div className="arch-card left-arch">
                        <h3>Ingredients</h3>
                        <ul>
                            <li>Apple</li>
                            <li>Banana</li>
                            <li>Pomegranate</li>
                            <li>Orange</li>
                            <li>2 Soak Dry Fruits</li>
                            <li>Seasonal Fruits</li>
                        </ul>
                    </div>

                    <div className="center-image">
                        <div className="delicious-badge">
                            oh-so-<br />delicious
                        </div>
                        <img src="/assets/bowl.jpg" alt="Fruit Salad Bowl" className="bowl-img" />
                    </div>

                    <div className="arch-card right-arch">
                        <h3>Benefits</h3>
                        <p>
                            Fresh mixed fruit keep you energized and glowing - boost immunity, aiding digestion and support heart health.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
