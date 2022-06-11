import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer__linkSec">
                <div className="footer__linkColumn">
                    <Link to="/" className="header__logo">
                        <div className="header__logoIcon">
                        <span class="material-icons-outlined">videocam</span>
                        </div>
                        <div className="header__logoName">
                            <span>Raj Studio</span>
                            <span>Since 1964</span>
                        </div>
                    </Link>
                </div>
                <div className="footer__linkColumn">
                    <Link to='#'>Home</Link>
                    <Link to='#'>Gallery</Link>
                    <Link to='#'>Video</Link>
                    <Link to='#'>Contact</Link>
                    <Link to='#'>Book</Link>
                </div>
                <div className="footer__linkColumn">
                    <Link to='#'>About Us</Link>
                    <Link to='#'>Lates Clicks</Link>
                    <Link to='#'>Pricing</Link>
                    <Link to='#'>Terms of Use</Link>
                    <Link to='#'>Privacy Policy</Link>
                </div>
                <div className="footer__linkColumn">                    
                    <Link to='#'>Wedding</Link>
                    <Link to='#'>Baby Shower</Link>
                    <Link to='#'>Ear Boring</Link>
                    <Link to='#'>House Warming</Link>
                    <Link to='#'>Corporate Events</Link>
                </div>
            </div>
            <div className="footer__socialSec">
                <div className="footer__socialLinkWrapper">
                    <div className="footer__socialLinks"><i class="fa-brands fa-discord"></i></div>
                    <div className="footer__socialLinks"><i class="fa-brands fa-youtube"></i></div>
                    <div className="footer__socialLinks"><i class="fa-brands fa-instagram"></i></div>
                    <div className="footer__socialLinks"><i class="fa-brands fa-twitter"></i></div>
                </div>
                <div className="footer__copyRight">
                    <div className="footer__copyRightText"><i class="fa-regular fa-copyright"></i> 2022 <span>RAJ STUDIO</span> | All Rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer