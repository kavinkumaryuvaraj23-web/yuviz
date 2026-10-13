
import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

import heroImg from '../images/stylehub/about-main.png'

export default function About() {

    const values = [
        {
            id: 1,
            title: "Quality First",
            description: "We choose carefully selected fabrics and ensure long-lasting quality."
        },
        {
            id: 2,
            title: "Sustainable Approach",
            description: "Thoughtful designs with a focus on a better tomorrow."
        },
        {
            id: 3,
            title: "Modern & Versatile",
            description: "Styles that fit work, casual outings, and everything in between."
        },
        {
            id: 4,
            title: "Customer Centric",
            description: "Your comfort and satisfaction always come first."
        }
    ];

    return (
        <div className="about-page">

            <section className="about-main">

                <div className="about-intro">

                    <p className="about-label">OUR STORY</p>

                    <h1>
                        MORE THAN <br />
                        FASHION
                    </h1>

                    <p className="about-description">
                        YUVIZ is a modern men's fashion concept created
                        for those who believe in simplicity, confidence,
                        and self-expression. We focus on premium-inspired
                        styles, contemporary designs, and versatile pieces
                        that fit your everyday life.
                    </p>

                    <Link to="/shop" className="about-button">
                        OUR COLLECTIONS →
                    </Link>

                </div>

                <div className="about-main-image">
                    <img src={heroImg} alt="YUVIZ modern menswear" />
                </div>

            </section>

            <section className="about-values">

                <div className="about-values-heading">

                    <p className="about-label">OUR VALUES</p>

                    <h2>
                        WHAT <br />
                        WE STAND FOR
                    </h2>

                </div>

                <div className="about-values-grid">

                    {values.map((item) => (
                        <div className="about-value" key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}

                </div>

            </section>

        </div>
    )
}
