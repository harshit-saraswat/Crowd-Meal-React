import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div id="about" className="container-row">
                <div className="section-left">
                    <h4 className="section-header">About</h4>
                    <h1 className="section-header-large">Let's help each other.</h1>
                    <p className="section-description">
                    Due to the impacts of the CoronaVirus many people are left unemployed, burning through their savings for bare necessities such as rent and food. Similarly, many restaurants and small business owners are struggling due to the reduced business traffic.
                    </p>
                    <p className="section-description">
                    Crowd Meal is an initiative to serve both of these groups of people by allowing those better off to donate money, which will be used to buy restaurant meals for people impacted by the virus.
                    </p>
                    <a className="mail-link" href="mailto:thecrowdmeal@gmail.com"><p><i class="far fa-envelope"></i>thecrowdmeal@gmail.com</p></a>
                    
                </div>
                <div className="section-right">
                    <img className="rightImage" src="https://thecrowdmeal.org/wp-content/uploads/2020/08/helping_each_other.jpg" alt="background-image"/>
                </div>
            </div>
        );
    };
}

export default About;