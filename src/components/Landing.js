import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/Logo.svg';
import welcome from '../assets/svg/Welcome.svg';

function Landing() {
    return (
        <section className='landing-wrapper'>
            <img className='welcome' src={welcome} alt='welcome' />
            <img className='logotype' src={logo} alt='logotype' />

            <Link to='/addalarm'>Set alarm</Link>
        </section>
        
    )
}

export default Landing