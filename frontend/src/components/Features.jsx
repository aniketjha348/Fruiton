import React from 'react';
import './Features.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Features = () => {
    useScrollAnimation();

    return (
        <section className="features-section" id="benefits">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Fruit Gain Salad</h2>
                <p className="features-intro animate-on-scroll delay-100">
                    These factors work together to provide extra energy and help you feel fuller for longer, ultimately supporting weight gain.
                </p>

                <div className="features-grid">
                    <div className="feature-item animate-on-scroll delay-200">
                        <div className="feature-icon">⚡</div>
                        <h3>Energy</h3>
                    </div>
                    <div className="feature-item animate-on-scroll delay-300">
                        <div className="feature-icon">🔥</div>
                        <h3>Higher Natural Calories</h3>
                    </div>
                    <div className="feature-item animate-on-scroll delay-400">
                        <div className="feature-icon">🍞</div>
                        <h3>Carbohydrates</h3>
                    </div>
                    <div className="feature-item animate-on-scroll delay-200">
                        <div className="feature-icon">🍬</div>
                        <h3>Natural Sugar</h3>
                    </div>
                    <div className="feature-item animate-on-scroll delay-300">
                        <div className="feature-icon">🥑</div>
                        <h3>Healthy Fats</h3>
                    </div>
                    <div className="feature-item animate-on-scroll delay-400">
                        <div className="feature-icon">🌾</div>
                        <h3>Good in Fibers</h3>
                    </div>
                </div>

                <div className="delivery-highlight animate-on-scroll delay-500">
                    <img src="/assets/delivery.jpg" alt="Delivery" className="delivery-img" />
                    <div className="delivery-text">
                        <h3>Fruiton Special Delivery</h3>
                        <p>Freshness packed with love ❤️</p>
                        <p>Every bite is freshness! 🍓🍎</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
