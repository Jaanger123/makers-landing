import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap container">
                <div className="footer-left">
                    <img
                        src={require('../media/logo_juniors.png')}
                        alt="logo"
                    />
                    <div className="footer-left-copy">
                        &copy; 2022 juniors. All rights reserved
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-right-address">
                        Табышалиева 29, Bishkek Kyrgyzstan
                    </p>
                    <div className="footer-right-icon-wrap">
                        <a
                            href="https://www.instagram.com/juniors.dev/"
                            className="icon"
                        >
                            <img
                                src={require('../media/makers-crm.svg').default}
                                alt="insta"
                            />
                        </a>
                        <a href="https://t.me/juniors_dev" className="icon">
                            <img
                                src={require('../media/telegram.svg').default}
                                alt="telegram"
                            />
                        </a>
                    </div>
                    <div className="footer-right-copy">
                        &copy; 2022 juniors. All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
