
import React from 'react'
import './Wardrobe.css'

import heroImg from '../images/stylehub/wardrobe-hero.webp'
import tshirtImg from '../images/stylehub/inner/essential-tshirt.webp'
import shirtImg from '../images/stylehub/inner/essential-shirt.webp'
import jeansImg from '../images/stylehub/inner/essential-jeans.webp'
import blazerImg from '../images/stylehub/inner/essential-blazer.webp'
import sneakersImg from '../images/stylehub/inner/essential-sneakers.webp'

export default function Wardrobe() {

    const essentials = [
        {
            id: 1,
            name: "Essential T-Shirt",
            description: "A versatile everyday basic for effortless casual styling.",
            image: tshirtImg
        },
        {
            id: 2,
            name: "Classic Shirt",
            description: "A timeless piece for both smart and casual occasions.",
            image: shirtImg
        },
        {
            id: 3,
            name: "Denim Jeans",
            description: "A durable wardrobe staple that pairs with almost anything.",
            image: jeansImg
        },
        {
            id: 4,
            name: "Tailored Blazer",
            description: "An elegant layer that elevates your overall appearance.",
            image: blazerImg
        },
        {
            id: 5,
            name: "Classic Sneakers",
            description: "Comfortable footwear for a clean everyday look.",
            image: sneakersImg
        }
    ];

    return (
        <div className="wardrobe-page">

            <div
                className="wardrobe-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >

                <p className="wardrobe-label">STYLE HUB</p>

                <h1>
                    WARDROBE <br />
                    <span>ESSENTIALS</span>
                </h1>

                <p className="wardrobe-description">
                    Discover timeless clothing essentials
                    every modern man should own.
                </p>

            </div>

            <div className="wardrobe-content">

                <h2>BUILD YOUR PERFECT WARDROBE</h2>

                <p>
                    Explore the essential pieces that bring
                    style, comfort, and versatility to your wardrobe.
                </p>

                <div className="wardrobe-grid">

                    {essentials.map((item) => (
                        <div className="wardrobe-card" key={item.id}>

                            <img src={item.image} alt={item.name} />

                            <div className="wardrobe-card-content">

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
