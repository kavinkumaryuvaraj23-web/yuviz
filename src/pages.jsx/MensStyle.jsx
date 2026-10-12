
import React from 'react'
import './MensStyle.css'

import heroImg from '../images/stylehub/mensstyle-hero.webp'
import collegeImg from '../images/stylehub/inner/college-look.webp'
import officeImg from '../images/stylehub/inner/office-look.webp'
import casualImg from '../images/stylehub/inner/casual-look.webp'
import dateImg from '../images/stylehub/inner/date-look.webp'
import formalImg from '../images/stylehub/inner/formal-look.webp'

export default function MensStyle() {

    const styles = [
        {
            id: 1,
            name: "College Look",
            description: "Stay stylish and comfortable with effortless everyday outfits.",
            image: collegeImg
        },
        {
            id: 2,
            name: "Office Look",
            description: "Create a professional appearance with smart and elegant clothing.",
            image: officeImg
        },
        {
            id: 3,
            name: "Casual Look",
            description: "Keep your everyday style relaxed, modern, and confident.",
            image: casualImg
        },
        {
            id: 4,
            name: "Date Night Look",
            description: "Make a lasting impression with a refined and stylish outfit.",
            image: dateImg
        },
        {
            id: 5,
            name: "Formal Look",
            description: "Dress with confidence for celebrations and special occasions.",
            image: formalImg
        }
    ];

    return (
        <div className="mensstyle-page">

            <div
                className="mensstyle-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >

                <p className="mensstyle-label">STYLE HUB</p>

                <h1>
                    MEN'S <br />
                    <span>STYLE GUIDE</span>
                </h1>

                <p className="mensstyle-description">
                    Discover outfit inspiration for every
                    occasion and express your personal style.
                </p>

            </div>

            <div className="mensstyle-content">

                <h2>FIND YOUR SIGNATURE STYLE</h2>

                <p>
                    Explore outfit ideas for college, office,
                    casual outings, date nights, and special occasions.
                </p>

                <div className="mensstyle-grid">

                    {styles.map((item) => (
                        <div className="mensstyle-card" key={item.id}>

                            <img src={item.image} alt={item.name} />

                            <div className="mensstyle-card-content">

                                <h3>{item.name}</h3>

                                <p>{item.description}</p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}
