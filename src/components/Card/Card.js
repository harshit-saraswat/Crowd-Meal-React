import React, { Component } from 'react'
import './Card.css';

const STYLES = [
    'card--success',
    'card--warning',
    'card--danger'
];

const SIZES = [
    'card--medium',
    'card--large'
];

export const Card = ({
    icon,
    title,
    description,
    cardStyle,
    cardSize
})=>{
    const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];
    const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];

    return (
        // <button className={`btn  ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        //     {children}
        // </button>

        <div className={`card ${checkCardStyle} ${checkCardSize}`}>
            <img src={icon} alt="card-icon" />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};