import React from 'react';
import { experience, achievements } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">Experience & Achievements</h2>

                <div className="experience-content">
                    <div className="timeline fade-in">
                        <h3 className="subsection-title">Work Experience</h3>
                        <div className="timeline-items">
                            {experience.map((exp) => (
                                <div key={exp.id} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-date">{exp.date}</div>
                                    <div className="timeline-content">
                                        <h4 className="timeline-role">{exp.role}</h4>
                                        <h5 className="timeline-org">{exp.org}</h5>
                                        <p className="timeline-desc">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="achievements fade-in">
                        <h3 className="subsection-title">Achievements</h3>
                        <ul className="achievements-list">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="achievement-item">
                                    <span className="achievement-icon">🏆</span>
                                    <span className="achievement-text">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
