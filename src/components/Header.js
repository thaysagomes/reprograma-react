import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div className="header">
            <a href="/"><img className="logo" src={logo}/></a>
            <div className="links">
                <a href="https://github.com/thaysagomes">Github</a>
                <a href="https://www.linkedin.com/in/tcgms/">LinkedIn</a>
                <a href="https://dribbble.com/tcgms">Dribbble</a>
            </div>
        </div>
    )
}

export default Header;