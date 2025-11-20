import React from 'react';
import SplitLayout from '../components/SplitLayout';
import { Button } from '../components/ui/button';
import { Download } from 'lucide-react';

const Resume = () => {
    const LeftContent = (
        <div className="space-y-12">
            <div>
                <h2 className="text-3xl font-light mb-4 tracking-tight">Resume / CV</h2>
                <p className="text-lg text-muted-foreground mb-6">
                    A summary of my professional experience, education, and technical skills.
                </p>
                <Button asChild size="lg">
                    <a href="/Resume-Original.pdf" download>
                        <Download className="mr-2 w-4 h-4" />
                        Download PDF
                    </a>
                </Button>
            </div>

            <div className="space-y-8 border-l border-border pl-8 ml-2">
                <div className="relative">
                    <span className="absolute -left-10 top-1 w-5 h-5 bg-primary rounded-full border-4 border-background"></span>
                    <h3 className="text-xl font-medium">Education</h3>
                    <div className="mt-2">
                        <h4 className="font-mono text-sm text-muted-foreground">2022 - Present</h4>
                        <p className="font-semibold">M.Tech in VLSI Design</p>
                        <p className="text-sm text-muted-foreground">Top University</p>
                    </div>
                </div>

                <div className="relative">
                    <span className="absolute -left-10 top-1 w-5 h-5 bg-muted rounded-full border-4 border-background"></span>
                    <h3 className="text-xl font-medium">Experience</h3>
                    <div className="mt-2">
                        <h4 className="font-mono text-sm text-muted-foreground">2022 - Present</h4>
                        <p className="font-semibold">Internship Coordinator</p>
                        <p className="text-sm text-muted-foreground">MTech VLSI Program</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // Full-screen PDF Viewer
    const RightContent = (
        <iframe
            src="/Resume-Original.pdf"
            className="w-full h-full"
            title="Resume PDF"
            style={{ border: 'none' }}
        />
    );

    return <SplitLayout leftContent={LeftContent} rightContent={RightContent} />;
};

export default Resume;
