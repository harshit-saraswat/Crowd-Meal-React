import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';
import logo from '../../images/crowdmeal_logo.png';

class Navbar extends Component {
    state = { clicked: false }

    handleClick=()=>{
        this.setState({clicked : !this.state.clicked})
    };

    render() {
        return (
            <nav id="navBar" className="NavbarItems">
                <a className="navbar-logo" href="/"><img src={logo} alt="logo-img"/></a>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        );
                    })}
                </ul>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5JCNPU6CHGDZ4&source=url" target="_blank"><Button>Donate Now</Button></a>
                
            </nav>
        );
    };
}

export default Navbar;