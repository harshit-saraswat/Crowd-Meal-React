import React, { Component } from 'react'
import './Pricing.css';
import { Button } from '../Button';

const STYLES = [
    'pricing--success',
    'pricing--warning',
    'pricing--danger'
];


export const Pricing = ({
    icon,
    title,
    description,
    listItems,
    btnText,
    btnLink,
    buttonStyle,
    pricingStyle
})=>{
    const checkPricingStyle = STYLES.includes(pricingStyle) ? pricingStyle : STYLES[0];

    return (
        <div className={`pricing ${checkPricingStyle}`}>
            <img className="pricing-icon" src={icon} alt="pricing-icon" />
            <h4 className="pricing-title">{title}</h4>
            <hr className={`pricing-separator ${checkPricingStyle}`}/>
            <p className="pricing-description">{description}</p>
            <ul className={`pricing-list ${checkPricingStyle}`}>
                {listItems.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    );
                })}
            </ul>
            <a className="btn-block" href={btnLink} target="_blank"><Button buttonSize="btn--block" buttonStyle={buttonStyle}>{btnText}</Button></a>
        </div>
    );
};