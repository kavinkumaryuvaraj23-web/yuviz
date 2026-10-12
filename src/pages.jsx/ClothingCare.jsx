
import React from 'react'
import './ClothingCare.css'

import heroImg from '../images/stylehub/clothingcare-hero.webp'
import cottonImg from '../images/stylehub/inner/cotton.webp'
import linenImg from '../images/stylehub/inner/linen.webp'
import denimImg from '../images/stylehub/inner/denim.webp'
import woolImg from '../images/stylehub/inner/wool.webp'

export default function ClothingCare() {

    const fabrics = [
        {
            id: 1,
            name: "Cotton",
            description: "Soft, breathable, and comfortable for everyday wear.",
            care: "Wash with mild detergent in cool water. Avoid excessive heat.",
            image: cottonImg
        },
        {
            id: 2,
            name: "Linen",
            description: "Lightweight and breathable fabric for warm weather.",
            care: "Use a gentle wash cycle and air dry to maintain quality.",
            image: linenImg
        },
        {
            id: 3,
            name: "Denim",
            description: "Durable and versatile fabric for timeless casual outfits.",
            care: "Wash inside out in cold water to help preserve the color.",
            image: denimImg
        },
        {
            id: 4,
            name: "Wool",
            description: "Warm and elegant fabric for premium winter clothing.",
            care: "Follow the care label. Use a wool-safe wash or dry clean when required.",
            image: woolImg
        }
    ];

    return (
        <div className="clothingcare-page">

            <div
                className="clothingcare-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >

                <p className="clothingcare-label">STYLE HUB</p>

                <h1>
                    FABRIC & <br />
                    <span>CLOTHING CARE</span>
                </h1>

                <p className="clothingcare-description">
                    Learn how to care for your favorite fabrics
                    and keep your clothes looking their best.
                </p>

            </div>

            <div className="clothingcare-content">

                <h2>KNOW YOUR FABRICS</h2>

                <p>
                    Understand different fabrics and discover
                    simple ways to maintain their quality.
                </p>

                <div className="clothingcare-grid">

                    {fabrics.map((item) => (
                        <div className="clothingcare-card" key={item.id}>

                            <img src={item.image} alt={item.name} />

                            <div className="clothingcare-card-content">

                                <h3>{item.name}</h3>

                                <p>{item.description}</p>

                                <h4>CARE TIP</h4>

                                <p>{item.care}</p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}
