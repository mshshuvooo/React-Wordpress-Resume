import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PwaContext } from '../../PwaContext';
import '../nav/Nav.css'
const Nav = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [pwaData] = useContext(PwaContext);
    

    return (
        <div className="resumx-menu-area">
            <div className="mobile-menu-warapper">
                <button className={`mobile-menu-btn ${mobileMenu ? 'show-btn' : 'hide-btn'}`} onClick={ () => setMobileMenu(false) }><i className="fa fa-times"></i></button>     
                <button className={`mobile-menu-btn ${mobileMenu ? 'hide-btn' : 'show-btn'}`} onClick={ () => setMobileMenu(true) }><i className="fa fa-bars"></i></button>

                <div className={`mobile-menu ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
                    <div className="mobile-menu-img">
                        <img src={pwaData?.general?.mobileMenuImg} alt="Shuvo"/>
                    </div>
                    <ul>
                        <li onClick={ () => setMobileMenu(false) }><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                        <li onClick={ () => setMobileMenu(false) }><Link to="/resume"><i className="fa fa-file-text-o"></i>Resume</Link></li>
                        <li onClick={ () => setMobileMenu(false) }><Link to="/services"><i className="fa fa-wrench"></i>Services</Link></li>
                        <li onClick={ () => setMobileMenu(false) }><Link to="/portfolio"><i className="fa fa-code"></i>Portfolio</Link></li>
                        <li onClick={ () => setMobileMenu(false) }><Link to="/contact"><i className="fa fa-envelope-o"></i>Contact</Link></li>
                        
                    </ul>
                    <div className="social-links">
                        {pwaData?.sidebar?.socialLinks.map( (socialItem, index) => {
                            return (
                                <a href={socialItem.socialUrl} key={index}><i className={`fa ${socialItem.socialIcon}`}></i></a>
                            )
                        } )}
                    </div>
                </div>
                
            </div>
            <div className="resume-main-menu">
                <ul>
                    <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                    <li><Link to="/resume"><i className="fa fa-file-text-o"></i>Resume</Link></li>
                    <li><Link to="/services"><i className="fa fa-wrench"></i>Services</Link></li>
                    <li><Link to="/portfolio"><i className="fa fa-code"></i>Portfolio</Link></li>
                    <li><Link to="/contact"><i className="fa fa-envelope-o"></i>Contact</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Nav;