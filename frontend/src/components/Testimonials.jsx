import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Fitness Enthusiast",
            text: "Fruiton has completely changed my morning routine. The freshness is unmatched!",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            id: 2,
            name: "Priya Patel",
            role: "Working Professional",
            text: "Love the convenience. The delivery is always on time and the packaging is cute.",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            id: 3,
            name: "Amit Singh",
            role: "Student",
            text: "Best way to gain healthy weight. The fruit combinations are delicious.",
            rating: "⭐⭐⭐⭐⭐"
        }
    ];

    return (
        <section className="testimonials-section animate-on-scroll">
            <div className="container">
                <h2 className="section-title">What Our Customers Say</h2>
                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div key={review.id} className={`testimonial-card animate-on-scroll delay-${(index + 1) * 100}`}>
                            <div className="quote-icon">❝</div>
                            <p className="review-text">{review.text}</p>
                            <div className="review-rating">{review.rating}</div>
                            <div className="reviewer-info">
                                <h4>{review.name}</h4>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
