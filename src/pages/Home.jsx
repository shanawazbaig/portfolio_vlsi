import React from 'react';
import SplitLayout from '../components/SplitLayout';
import { Dithering } from "@paper-design/shaders-react";
import { personalDetails, experience } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
    const LeftContent = (
        <div className="space-y-12">
            <div className="space-y-6">
                <h1 className="text-4xl font-light tracking-tight leading-tight">
                    {personalDetails.name}
                </h1>
                <h2 className="text-xl font-mono text-muted-foreground">
                    {personalDetails.role}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-md">
                    {personalDetails.about}
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    Experience
                </h3>
                <div className="space-y-6">
                    {experience.map((exp) => (
                        <div
                            key={exp.id}
                            className="flex flex-col sm:flex-row sm:items-baseline justify-between group"
                        >
                            <div className="flex flex-col">
                                <span className="font-semibold text-lg group-hover:text-primary transition-colors">
                                    {exp.org}
                                </span>
                                <span className="text-sm text-muted-foreground">{exp.role}</span>
                            </div>
                            <span className="font-mono text-sm text-muted-foreground mt-1 sm:mt-0">
                                {exp.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                    Connect
                </h3>
                <div className="flex gap-6 font-mono">
                    {personalDetails.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    const RightContent = (
        <Dithering
            style={{ height: "100%", width: "100%" }}
            colorBack="hsl(0, 0%, 5%)"
            colorFront="hsl(180, 100%, 50%)"
            shape="cat"
            type="4x4"
            pxSize={3}
            scale={0.8}
            speed={0.1}
        />
    );

    return <SplitLayout leftContent={LeftContent} rightContent={RightContent} />;
};

export default Home;
