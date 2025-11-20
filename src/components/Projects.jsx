import React from 'react';
import { projects } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container-fluid">
                <h2 className="section-title">Projects</h2>
                <div className="carousel-container">
                    <div className="carousel-track">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="project-content">
                                    <div className="project-header">
                                        <span className="project-category">{project.category}</span>
                                        <div className="project-links">
                                            {project.links.repo && <a href={project.links.repo} target="_blank" rel="noopener noreferrer" title="GitHub">GH</a>}
                                            {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer" title="Demo">Demo</a>}
                                        </div>
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
