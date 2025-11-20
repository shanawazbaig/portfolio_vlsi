import React from 'react';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-container">
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="skills-category fade-in">
                            <h3 className="category-title">{skillCategory.category}</h3>
                            <div className="skills-list">
                                {skillCategory.items.map((item, idx) => (
                                    <div key={idx} className="skill-item">
                                        <span className="skill-name">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
