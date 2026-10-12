
import React, { useState } from 'react'
import './Contact.css'

import contactImage from '../images/stylehub/mensstyle-hero.webp'

import locationIcon from '../images/contact/location.svg'
import phoneIcon from '../images/contact/phone.svg'
import emailIcon from '../images/contact/email.svg'
import clockIcon from '../images/contact/clock.svg'
import truckIcon from '../images/contact/truck.svg'
import supportIcon from '../images/contact/support.svg'
import shoppingBagIcon from '../images/contact/shopping-bag.svg'
import instagramIcon from '../images/contact/instagram.webp'
import facebookIcon from '../images/contact/facebook.webp'
import youtubeIcon from '../images/contact/youtube.webp'
import pinterestIcon from '../images/contact/pinterest.svg'
import sendIcon from '../images/contact/send.svg'

export default function Contact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [success, setSuccess] = useState('')

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
            setSuccess('Please fill all the fields.')
            return
        }

        setSuccess('Your message has been submitted successfully!')

        setForm({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    const [newsletter, setNewsletter] = useState('')
    const [newsletterMessage, setNewsletterMessage] = useState('')

    const handleNewsletter = (e) => {
        e.preventDefault()

        if (!newsletter.trim()) {
            setNewsletterMessage('Please enter your email.')
            return
        }

        setNewsletterMessage('Thank you for subscribing!')
        setNewsletter('')
    }

    return (
        <div className="contact-page">

            <section className="contact-hero">

                <div className="contact-hero-content">
                    <p className="contact-small-title">YUVIZ / GET IN TOUCH</p>
                    <h1>LET'S CONNECT<span>.</span></h1>
                    <p>
                        Have a question about our collection, an order,
                        or just want to say hello? We'd love to hear from you.
                    </p>
                    <a href="#contact-main" className="contact-hero-button">
                        CONTACT US →
                    </a>
                </div>

                <div className="contact-hero-image">
                    <img src={contactImage} alt="YUVIZ Men's Fashion" />
                </div>

            </section>

            <section className="contact-main" id="contact-main">

                <div className="contact-information">

                    <p className="contact-small-title">REACH OUT</p>
                    <h2>GET IN TOUCH</h2>
                    <p className="contact-description">
                        We're here to help you with your fashion journey.
                        Reach us through any of the following.
                    </p>

                    <div className="contact-info-item">
                        <img src={locationIcon} alt="Location" />
                        <div>
                            <h3>OUR LOCATION</h3>
                            <p>Namakkal, Tamil Nadu, India</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <img src={phoneIcon} alt="Phone" />
                        <div>
                            <h3>CALL US</h3>
                            <p>Contact number coming soon</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <img src={emailIcon} alt="Email" />
                        <div>
                            <h3>EMAIL US</h3>
                            <p>Contact email coming soon</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <img src={clockIcon} alt="Working Hours" />
                        <div>
                            <h3>WORKING HOURS</h3>
                            <p>Monday - Saturday</p>
                            <p>9:00 AM - 7:00 PM</p>
                        </div>
                    </div>

                </div>

                <div className="contact-form-section">

                    <p className="contact-small-title">SEND A MESSAGE</p>
                    <h2>DROP US A LINE</h2>
                    <p className="contact-description">
                        Fill out the form below and we'll get back to you.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="contact-form-row">

                            <div className="contact-input-group">
                                <label>YOUR NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="contact-input-group">
                                <label>EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className="contact-input-group">
                            <label>SUBJECT</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What's this about?"
                                value={form.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="contact-input-group">
                            <label>YOUR MESSAGE</label>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                rows="6"
                                value={form.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-submit">
                            SEND MESSAGE
                            <img src={sendIcon} alt="" />
                        </button>

                        {success && <p className="contact-success">{success}</p>}

                    </form>

                </div>

            </section>

            <section className="contact-support">

                <div className="contact-support-card">
                    <img src={truckIcon} alt="Delivery" />
                    <h3>FAST DELIVERY</h3>
                    <p>Reliable delivery to your doorstep.</p>
                </div>

                <div className="contact-support-card">
                    <img src={supportIcon} alt="Support" />
                    <h3>CUSTOMER SUPPORT</h3>
                    <p>We're here to help with your questions.</p>
                </div>

                <div className="contact-support-card">
                    <img src={shoppingBagIcon} alt="Shopping" />
                    <h3>SHOP WITH CONFIDENCE</h3>
                    <p>Explore our curated men's fashion collection.</p>
                </div>

            </section>

            <section className="contact-map-section">

                <div className="contact-map-heading">
                    <p className="contact-small-title">FIND US</p>
                    <h2>OUR LOCATION</h2>
                </div>

                <iframe
                    title="YUVIZ Location Map"
                    src="https://www.google.com/maps?q=Namakkal,Tamil+Nadu&output=embed"
                    loading="lazy"
                ></iframe>

            </section>

            <section className="contact-newsletter">

                <div>
                    <p className="contact-small-title">STAY CONNECTED</p>
                    <h2>JOIN THE YUVIZ CLUB</h2>
                    <p>Get style inspiration and updates from YUVIZ.</p>
                </div>

                <form onSubmit={handleNewsletter}>

                    <div className="newsletter-input">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={newsletter}
                            onChange={(e) => setNewsletter(e.target.value)}
                        />
                        <button type="submit">SUBSCRIBE →</button>
                    </div>

                    {newsletterMessage && <p>{newsletterMessage}</p>}

                </form>

            </section>

            <footer className="contact-footer">

                <div className="contact-footer-grid">

                    <div className="contact-footer-brand">
                        <h2>YUVIZ<span>.</span></h2>
                        <p>
                            Redefining modern men's fashion with timeless
                            style and confidence.
                        </p>

                        <div className="contact-social-icons">
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <img src={instagramIcon} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <img src={facebookIcon} alt="Facebook" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                <img src={youtubeIcon} alt="YouTube" />
                            </a>
                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                                <img src={pinterestIcon} alt="Pinterest" />
                            </a>
                        </div>
                    </div>

                    <div className="contact-footer-column">
                        <h3>QUICK LINKS</h3>
                        <a href="/">Home</a>
                        <a href="/Shop">Shop</a>
                        <a href="/stylehub">Style Hub</a>
                        <a href="/About">About Us</a>
                        <a href="/Contact">Contact</a>
                    </div>

                    <div className="contact-footer-column">
                        <h3>SHOP</h3>
                        <a href="/Shop">Shirts</a>
                        <a href="/Shop">T-Shirts</a>
                        <a href="/Shop">Jeans</a>
                        <a href="/Shop">Jackets</a>
                        <a href="/Shop">Hoodies</a>
                    </div>

                    <div className="contact-footer-column">
                        <h3>CONTACT</h3>
                        <p>Namakkal, Tamil Nadu</p>
                        <p>India</p>
                        <p>Contact details coming soon</p>
                    </div>

                </div>

                <div className="contact-footer-bottom">
                    <p>© 2026 YUVIZ. All Rights Reserved.</p>
                    <p>DESIGNED FOR THE MODERN MAN</p>
                </div>

            </footer>

        </div>
    )
}
