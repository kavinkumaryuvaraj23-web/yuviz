
import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

import heroImg from '../images/stylehub/mensstyle-hero.webp'
import modelImg from '../images/stylehub/inner/casual-look.webp'
import storeImg from '../images/stylehub/wardrobe-hero.webp'

export default function About() {

    const values = [
        {
            id: 1,
            icon: "◇",
            title: "Quality First",
            description: "We choose carefully selected fabrics and ensure long-lasting quality."
        },
        {
            id: 2,
            icon: "✦",
            title: "Sustainable Approach",
            description: "Thoughtful designs with a focus on a better tomorrow."
        },
        {
            id: 3,
            icon: "♧",
            title: "Modern & Versatile",
            description: "Styles that fit work, casual outings, and everything in between."
        },
        {
            id: 4,
            icon: "♡",
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

                    <Link to="/Shop" className="about-button">
                        OUR COLLECTIONS →
                    </Link>

                </div>

                <div className="about-highlights">

                    <div className="about-highlight">
                        <div className="about-icon">◇</div>
                        <div>
                            <h3>Premium Quality</h3>
                            <p>Carefully selected styles for long-lasting comfort.</p>
                        </div>
                    </div>

                    <div className="about-highlight">
                        <div className="about-icon">✧</div>
                        <div>
                            <h3>Modern Designs</h3>
                            <p>Trendy yet timeless styles for every occasion.</p>
                        </div>
                    </div>

                    <div className="about-highlight">
                        <div className="about-icon">♧</div>
                        <div>
                            <h3>Made for Everyday Men</h3>
                            <p>Comfort, style, and confidence in one place.</p>
                        </div>
                    </div>

                </div>

                <div className="about-main-image">
                    <img src={heroImg} alt="YUVIZ modern menswear" />
                </div>

            </section>

            <section className="about-middle">

                <div className="about-model-image">
                    <img src={modelImg} alt="YUVIZ men's fashion inspiration" />
                </div>

                <div className="about-vision">

                    <p className="about-label">OUR VISION</p>

                    <h2>
                        STYLE FOR A <br />
                        BETTER TOMORROW
                    </h2>

                    <p>
                        To become a trusted men's fashion destination
                        known for quality, modern aesthetics, and
                        accessible everyday style.
                    </p>

                    <div className="about-stats">

                        <div>
                            <strong>100%</strong>
                            <span>STYLE FOCUS</span>
                        </div>

                        <div>
                            <strong>24/7</strong>
                            <span>INSPIRATION</span>
                        </div>

                        <div>
                            <strong>5+</strong>
                            <span>STYLE CATEGORIES</span>
                        </div>

                    </div>

                </div>

                <div className="about-store-image">
                    <img src={storeImg} alt="Premium wardrobe inspiration" />
                </div>

                <div className="about-store">

                    <p className="about-label">OUR COLLECTION</p>

                    <h2>
                        A SPACE FOR <br />
                        MODERN MEN
                    </h2>

                    <p>
                        YUVIZ brings together everyday essentials
                        and modern fashion inspiration, designed
                        to make you look and feel your best.
                    </p>

                    <Link to="/Shop" className="about-button">
                        VISIT COLLECTIONS →
                    </Link>

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

                            <div className="about-icon">
                                {item.icon}
                            </div>

                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>

                        </div>
                    ))}

                </div>

            </section>

        </div>
    )
}
