import React from 'react';
import { personalDetails } from '../data';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <h3 className="greeting">Hello, I'm</h3>
                    <h1 className="name">{personalDetails.name || "Hardware Engineer"}</h1>
                    <h2 className="role">{personalDetails.role}</h2>
                    <p className="about">{personalDetails.about}</p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual fade-in">
                    {/* Abstract visual representation of hardware/chips */}
                    <div className="chip-visual">
                        <div className="chip-core"></div>
                        <div className="circuit-lines">
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
