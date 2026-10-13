
import React, { useState } from 'react'
import './Contact.css'

import contactImage from '../images/stylehub/mensstyle-hero.webp'

import locationIcon from '../images/contact/location.svg'
import phoneIcon from '../images/contact/phone.svg'
import emailIcon from '../images/contact/email.svg'
import truckIcon from '../images/contact/truck.svg'
import supportIcon from '../images/contact/support.svg'
import shoppingBagIcon from '../images/contact/shopping-bag.svg'


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

                    <button className="contact-hero-button">
                        CONTACT US →
                    </button>
                </div>

                <div className="contact-hero-image">
                    <img src={contactImage} alt="YUVIZ Men's Fashion" />
                </div>

            </section>






            <section className="contact-newsletter">

                <div>
                    <p className="contact-small-title">STAY CONNECTED</p>
                    <h2>JOIN THE YUVIZ CLUB</h2>
                    <p>Get style inspiration and updates from YUVIZ.</p>
                </div>



                    <div className="newsletter-input">
                        <input
                            type="email"
                            placeholder="Enter your email address"/>
                        <button type="submit">SUBSCRIBE →</button>
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

            <footer className="contact-footer">

                <div className="contact-footer-grid">

                    <div className="contact-footer-brand">
                        <h2>YUVIZ<span>.</span></h2>
                        <p>
                            Redefining modern men's fashion with timeless
                            style and confidence.
                        </p>


                    </div>



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
                            <p>+91 9345128264</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <img src={emailIcon} alt="Email" />
                        <div>
                            <h3>EMAIL US</h3>
                            <p>kavin.yuviz@gmail.com</p>
                        </div>
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
