import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const SplitLayout = ({ leftContent, rightContent }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/skills', label: 'Skills' },
        { path: '/blog', label: 'Blog' },
        { path: '/resume', label: 'Resume' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="flex min-h-screen w-screen overflow-hidden bg-background text-foreground">
            {/* Left Panel: Content & Navigation */}
            <div className="w-1/2 h-screen overflow-y-auto flex flex-col p-12 border-r border-border relative">
                {/* Theme Toggle */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="absolute top-12 right-12 p-2 rounded-full hover:bg-accent transition-colors z-20"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? (
                        <Sun className="w-5 h-5" />
                    ) : (
                        <Moon className="w-5 h-5" />
                    )}
                </button>

                {/* Navigation */}
                <nav className="flex justify-between items-center mb-16">
                    <div className="font-mono text-lg font-bold">dev-folio</div>
                    <ul className="flex gap-6">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`font-mono text-sm transition-all hover:text-primary ${location.pathname === link.path
                                            ? 'text-primary border-b-2 border-primary pb-0.5'
                                            : 'text-muted-foreground'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Main Content Area */}
                <div className="flex-1 animate-in fade-in duration-500">
                    {leftContent}
                </div>

                {/* Footer / Copyright */}
                <div className="mt-12 font-mono text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Shanawaz Baig
                </div>
            </div>

            {/* Right Panel: Visuals */}
            <div className="w-1/2 h-screen relative overflow-hidden bg-black">
                {rightContent}
            </div>
        </div>
    );
};

export default SplitLayout;
