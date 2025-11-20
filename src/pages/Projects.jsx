import React, { useState } from 'react';
import SplitLayout from '../components/SplitLayout';
import { LiquidMetal } from "@paper-design/shaders-react";
import { projects } from '../data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const LeftContent = (
        <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">Selected Works</h2>
            <div className="space-y-12">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        className="group cursor-pointer transition-all hover:border-primary"
                        onMouseEnter={() => setHoveredProject(project)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <CardHeader>
                            <div className="flex items-baseline justify-between mb-2">
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                                <Badge variant="outline" className="text-xs">
                                    {project.category}
                                </Badge>
                            </div>
                            <CardDescription className="text-sm leading-relaxed max-w-lg">
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="secondary" className="text-xs">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-4 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {project.links.repo && (
                                    <a
                                        href={project.links.repo}
                                        className="flex items-center gap-2 text-primary hover:underline"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        className="flex items-center gap-2 text-primary hover:underline"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );

    const RightContent = (
        <div className="relative w-full h-full">
            <LiquidMetal
                style={{ height: "100%", width: "100%" }}
                color1={hoveredProject ? "#00f2ff" : "#333"}
                color2={hoveredProject ? "#7000ff" : "#111"}
                color3={hoveredProject ? "#ffffff" : "#000"}
                speed={0.2}
                blobSize={0.4}
            />
            {hoveredProject && (
                <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-md p-4 border border-white/10 rounded max-w-sm transition-all duration-500">
                    <img
                        src={hoveredProject.image}
                        alt={hoveredProject.title}
                        className="w-full h-48 object-cover mb-2 rounded opacity-80"
                    />
                    <p className="font-mono text-xs text-primary">Previewing: {hoveredProject.title}</p>
                </div>
            )}
        </div>
    );

    return <SplitLayout leftContent={LeftContent} rightContent={RightContent} />;
};

export default Projects;
