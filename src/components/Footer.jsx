import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">
                    Designed & Built by <span className="highlight">Portfolio User</span>
                </p>
                <p className="credits">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
