import React, { Component } from 'react';
import './Footer.css';
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { SocialMediaItems } from "../SocialMedia/SocialMediaItems";

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="container">
                <div className="icons-row">
                    <img className="logo-image" src="https://thecrowdmeal.org/wp-content/uploads/2020/08/crowdmeal_logo-1.png" alt="logo-image"/>
                    <div className="social-container">
                        {SocialMediaItems.map((item, index) => {
                            return (
                                <SocialMedia key={index} icon={item.icon} style={item.style} link={item.link} />
                            );
                        })}
                    </div>
                </div>
                <div className="footer">
                    <a href="#navBar" className="backToTopLink">
                        <i class="fas fa-angle-up"></i>
                    </a>
                    <p className="footer-text">© 2020 Crowd Meal. All Rights Reserved.</p>
                </div>
            </div>
        );
    };
}

export default Footer;