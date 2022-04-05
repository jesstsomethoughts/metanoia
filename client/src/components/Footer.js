import React from 'react'
import '../assets/css/Footer.css';
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";

function Footer() {
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
                    <Link className="indiv_links" target="_top" to="/"> Home</Link>
                    <Link className="indiv_links" target="_top" to="/about"> About</Link>
                    <Link className="indiv_links" target="_top" to="/blog"> Blog</Link>
                    <Link className="indiv_links" target="_top" to="/contact"> Contact</Link>
                    <Link className="indiv_links" target="_top" to="/subscribe"> Subscribe</Link>
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
