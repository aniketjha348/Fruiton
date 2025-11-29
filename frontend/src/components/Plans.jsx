import React from 'react';
import './Plans.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Plans = () => {
    useScrollAnimation();

    return (
        <section className="plans-section" id="plans">
            <div className="container">
                <h2 className="section-title animate-on-scroll">OUR MEMBERSHIP PLANS</h2>
                <p className="section-subtitle animate-on-scroll delay-100">CHOOSE THE BEST FOR YOU!</p>

                <div className="plans-container">
                    {/* Plan 1 */}
                    <div className="plan-card animate-on-scroll delay-200">
                        <div className="plan-header">
                            <div className="price">₹1999</div>
                            <div className="weight">Weight ~ 300g</div>
                        </div>
                        <div className="plan-body">
                            <div className="duration">28 Days</div>
                            <div className="features">
                                <h4>INCLUDING :-</h4>
                                <ul>
                                    <li>Six Seasonal Fruits</li>
                                    <li>& Dry Fruits</li>
                                    <li>Free Delivery in the</li>
                                    <li>Range of 5 KM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ribbon">ORDER NOW!</div>
                    </div>

                    {/* Plan 2 */}
                    <div className="plan-card animate-on-scroll delay-300">
                        <div className="plan-header">
                            <div className="price">₹2700</div>
                            <div className="weight">Weight ~ 500g</div>
                        </div>
                        <div className="plan-body">
                            <div className="duration">28 Days</div>
                            <div className="features">
                                <h4>INCLUDING :-</h4>
                                <ul>
                                    <li>Six Seasonal Fruits</li>
                                    <li>& Dry Fruits</li>
                                    <li>Free Delivery in the</li>
                                    <li>Range of 5 KM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ribbon">ORDER NOW!</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;
