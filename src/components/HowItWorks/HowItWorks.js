import React, { Component } from 'react';
import './HowItWorks.css';
import { Pricing } from "../Pricing/Pricing";
import { PricingItems } from "../Pricing/PricingItems";

class HowItWorks extends Component {
    render() {
        return (
            <div id="howItWorks" className="container">
                <div className="container-header">
                    <h4 className="section-header">How It Works</h4>
                    <h1 className="section-header-large">Here to make impact.</h1>
                    <p className="section-description">
                        Crowd Meal helps those in need by using donor money to purchase restaurant meals, spurring the economy one meal at a time.
                    </p>
                </div>

                <div className="container-pricing">
                    {PricingItems.map((item, index) => {
                        return (
                            <Pricing key={index} icon={item.icon} title={item.title} description={item.description} listItems={item.listItems} btnText={item.btnText} btnLink={item.btnLink} buttonStyle={item.buttonStyle} pricingStyle={item.pricingStyle} />
                        );
                    })}
                </div>

                <h4 className="section-footer">One meal at a time.</h4>
            </div>
        );
    };
}

export default HowItWorks;