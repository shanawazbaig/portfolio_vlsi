import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#hero' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">Portfolio<span className="dot">.</span></Link>
                </div>

                <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        isHome ? (
                            <a
                                key={link.name}
                                href={link.href.substring(1)} // remove leading / for local anchor
                                className="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <Link
                        to="/blog"
                        className="nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </Link>
                </div>

                <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
