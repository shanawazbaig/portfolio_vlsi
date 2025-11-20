import React from 'react';
import SplitLayout from '../components/SplitLayout';
import { FlutedGlass } from "@paper-design/shaders-react";
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
    const LeftContent = (
        <div className="space-y-12">
            <div>
                <h2 className="text-3xl font-light mb-4 tracking-tight">Get in Touch</h2>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                    Interested in collaboration or have a project in mind? Let's build something extraordinary.
                </p>
            </div>

            <form className="space-y-6 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Name
                    </label>
                    <Input
                        type="text"
                        placeholder="John Doe"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Email
                    </label>
                    <Input
                        type="email"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Message
                    </label>
                    <Textarea
                        rows={4}
                        placeholder="Hello..."
                    />
                </div>

                <Button className="w-full sm:w-auto" size="lg">
                    Send Message
                </Button>
            </form>

            <div className="pt-12 border-t border-border">
                <p className="font-mono text-sm text-muted-foreground">
                    Based in India • Available for Remote Work
                </p>
            </div>
        </div>
    );

    const RightContent = (
        <FlutedGlass
            style={{ height: "100%", width: "100%" }}
            image="/hero.jpg"
            colorBack="#00000000"
            colorShadow="#000000"
            colorHighlight="#ffffff"
            size={0.4}
            shadows={0.71}
            highlights={0.51}
            shape="wave"
            angle={0}
            distortionShape="prism"
            distortion={0.5}
            shift={0}
            stretch={0}
            blur={0}
            edges={0}
            margin={0}
            grainMixer={0.56}
            grainOverlay={0}
            scale={1.02}
            fit="cover"
        />
    );

    return <SplitLayout leftContent={LeftContent} rightContent={RightContent} />;
};

export default Contact;
