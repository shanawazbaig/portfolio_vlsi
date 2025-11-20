import React from 'react';
import { personalDetails } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently looking for new opportunities in VLSI and Hardware Design.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-links">
                    <a href={personalDetails.social.find(s => s.name === 'Email')?.url} className="btn btn-primary contact-btn">
                        Say Hello
                    </a>
                </div>

                <div className="social-links">
                    {personalDetails.social.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
