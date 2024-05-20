/* Header.js */
// import logo from "../components/Logo/city-logo.png";

// function Header() {
//     return <img src={logo} className="App-logo" alt="logo" />;
// }

// export default Header;

// 1차 시도
import React from 'react';
import '../styles/Header.css';

import Logo from "../components/Logo/city-logo.png";
import MenuBar from '../components/Logo/fi-sr-menu-burger.png';

const Header = () => {
    return (
        <header className='App-header'>
            <section className='App-menu'>
                <img src={MenuBar} alt='Menu Bar'/>
            </section>
            <section className='App-logo'>
                <img src={Logo} alt='Logo' />
            </section>
        </header>
    );
}

export default Header;
