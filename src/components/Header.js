import React from 'react';
import Logo from '../images/Logo.svg';

function Header() {
    return (
        <header className="header page__container" >
            <img src={Logo}
                className="header__logo"
                alt="Логотип проета Mesto" />
        </header>
    )
}

export default Header;