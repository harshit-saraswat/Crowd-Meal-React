import React, { Component } from 'react'
import './SocialMedia.css';
import { SocialMediaItems } from './SocialMediaItems';

const STYLES = [
    'icon--turquoise'
];

export const SocialMedia = ({
    icon,
    style,
    link
})=>{
    const checkIconStyle = STYLES.includes(style) ? style : STYLES[0];

    return (
        <a className={checkIconStyle} href={link}>
            <i class={icon}></i>
        </a>
    );
};