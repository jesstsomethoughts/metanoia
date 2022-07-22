import React from 'react'
import '../assets/css/Footer.css';
import Nav from 'react-bootstrap/Nav';
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";

function Footer() {
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className='main_footer'>
            <div className='footer_container'>
                <div className='content_container'>
                    <div className='social_medias'>
                        <SocialIcon id="mail" bgColor="#ffffff" target="_blank" url="mailto:metanoiabooks.co@gmail.com" />
                        <SocialIcon id="linkedin" bgColor="#ffffff" target="_blank" url="https://www.linkedin.com/company/metanoiabooks/" />
                        <SocialIcon id="facebook" bgColor="#ffffff" target="_blank" url="https://www.facebook.com/MetanoiaLibrary/"/>
                    </div>
                    <div className="footer_links">
                        <Nav.Link onClick={scrollToTop} as={ Link } className="indiv_links" to="/">Home</Nav.Link>
                        <Nav.Link onClick={scrollToTop} as={ Link } className="indiv_links" to="/about">About</Nav.Link>
                        <Nav.Link onClick={scrollToTop} as={ Link } className="indiv_links" to="/blog">Blog</Nav.Link>
                        <Nav.Link onClick={scrollToTop} as={ Link } className="indiv_links" to="/contact">Contact</Nav.Link>
                        <Nav.Link onClick={scrollToTop} as={ Link } className="indiv_links" to="/subscribe">Subscribe</Nav.Link>
                    </div>
                    <div className="comp_name">
                    &copy; 2022 Metanoia Books Co.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
