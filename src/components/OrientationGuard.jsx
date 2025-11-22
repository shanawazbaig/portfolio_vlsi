import React, { useState, useEffect } from 'react';
import { Smartphone, RotateCw } from 'lucide-react';

const OrientationGuard = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            const isMobile = window.innerWidth < 768;
            const isPortrait = window.innerHeight > window.innerWidth;

            // Show overlay if on mobile and in portrait mode
            if (isMobile && isPortrait) {
                setShowOverlay(true);
            } else {
                setShowOverlay(false);
            }
        };

        // Check initially
        checkOrientation();

        // Add event listeners
        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);

        return () => {
            window.removeEventListener('resize', checkOrientation);
            window.removeEventListener('orientationchange', checkOrientation);
        };
    }, []);

    if (!showOverlay) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
            <div className="relative mb-8 animate-pulse">
                <Smartphone className="w-24 h-24 text-primary" />
                <RotateCw className="w-12 h-12 text-accent absolute -right-4 -bottom-4 animate-spin-slow" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Please Rotate Your Device</h2>
            <p className="text-muted-foreground max-w-xs text-lg">
                This portfolio is designed for a split-screen experience. For the best view, please rotate your phone to landscape mode.
            </p>
        </div>
    );
};

export default OrientationGuard;
