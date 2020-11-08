import React, { Component } from 'react'
import { Button } from '../Button';
import { Card } from '../Card/Card';
import { CardItems } from '../Card/CardItems';
import './Header.css';
import bgImg from '../../images/hompage_hands.jpg';


class Header extends Component {
    render() {
        return (
            <div className="container">
                <img className="headerImage" src={bgImg} alt="background-image"/>
                <div className="container-left">
                    <h1>41 Million left unemployed by the corona virus</h1>
                    <h5>The global pandemic has handicapped both local restaurants and citizens</h5>
                    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5JCNPU6CHGDZ4&source=url" target="_blank"><Button buttonSize="btn--large" buttonStyle="btn--purple">How Can I Help?</Button></a>
                </div>
                <div className="wrapper">
                    <div className="container-bottom">
                        <h3>Here to lighten the burden of COVID</h3>
                        <h5>The global pandemic has handicapped both local restaurants and citizens</h5>
                    </div>
                    <div className="card-container">
                        {CardItems.map((item, index) => {
                            return (
                                <Card key={index} icon={item.icon} title={item.title} description={item.description} cardStyle={item.cardStyle} cardSize={item.cardSize} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;