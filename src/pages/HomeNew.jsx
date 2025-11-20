import React, { useState } from 'react';
import { Dithering } from "@paper-design/shaders-react";
import { personalDetails, experience } from '../data';
import { Link } from 'react-router-dom';
import './HomeNew.css';

const HomeNew = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className="home-container">
            <div className={`left-panel ${isDarkMode ? "dark-mode" : "light-mode"}`}>
                {/* Theme toggle button */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="theme-toggle"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? (
                        // Sun icon for light mode
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg>
                    ) : (
                        // Moon icon for dark mode
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    )}
                </button>

                {/* Header */}
                <div className="header-section">
                    <h1 className="site-title">dev-folio</h1>
                    <div className="profile-info">
                        <h2 className="profile-name">{personalDetails.name}</h2>
                        <h3 className="profile-role">{personalDetails.role}</h3>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="experience-section">
                    {experience.map((exp) => (
                        <div key={exp.id} className="experience-item">
                            <span className="exp-org">{exp.org}</span>
                            <span className="exp-role">{exp.role}</span>
                            <span className="exp-date">{exp.date}</span>
                        </div>
                    ))}
                </div>

                {/* Footer Links Section */}
                <div className="footer-links">
                    <div className="links-container">
                        <span>Links</span>
                        {personalDetails.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-item"
                            >
                                {social.name}
                            </a>
                        ))}
                        <Link to="/blog" className="link-item">Blog</Link>
                    </div>
                </div>
            </div>

            <div className="right-panel">
                <Dithering
                    style={{ height: "100%", width: "100%" }}
                    colorBack={isDarkMode ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 95%)"}
                    colorFront={isDarkMode ? "hsl(320, 100%, 70%)" : "hsl(220, 100%, 70%)"}
                    shape="cat"
                    type="4x4"
                    pxSize={3}
                    offsetX={0}
                    offsetY={0}
                    scale={0.8}
                    rotation={0}
                    speed={0.1}
                />
            </div>
        </div>
    );
};

export default HomeNew;
