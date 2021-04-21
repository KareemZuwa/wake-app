import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/Logo.svg';

function Landing() {
    return (
        <section>
            <h2>Welcome to</h2>

            <img src={logo} alt='logotype' />

            <Link to='/'>Set Alarm</Link>

            
        </section>
    )
}

export default Landing
