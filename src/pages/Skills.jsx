import React from 'react';
import SplitLayout from '../components/SplitLayout';
import { GodRays } from "@paper-design/shaders-react";
import { skills } from '../data';
import { Badge } from '../components/ui/badge';

const Skills = () => {
    const LeftContent = (
        <div className="space-y-12">
            <h2 className="text-3xl font-light tracking-tight">Technical Arsenal</h2>

            <div className="grid gap-12">
                {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-6">
                        <h3 className="text-xl font-mono text-primary border-b border-border pb-2 inline-block">
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skillGroup.items.map((item) => (
                                <Badge
                                    key={item}
                                    variant="outline"
                                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                                >
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 p-6 border border-dashed border-border rounded bg-muted/30">
                <h4 className="font-mono text-sm text-muted-foreground mb-2">Currently Learning</h4>
                <p className="text-lg">Advanced FPGA Architecture & SystemVerilog Assertions</p>
            </div>
        </div>
    );

    const RightContent = (
        <GodRays
            style={{ height: "100%", width: "100%" }}
            colors={["#a600ff6e", "#6200fff0", "#ffffff", "#33fff5"]}
            colorBack="#000000"
            colorBloom="#0000ff"
            bloom={0.4}
            intensity={0.8}
            density={0.3}
            spotty={0.3}
            midSize={0.2}
            midIntensity={0.4}
            speed={0.75}
            offsetX={0.3}
            offsetY={-0.11}
        />
    );

    return <SplitLayout leftContent={LeftContent} rightContent={RightContent} />;
};

export default Skills;
