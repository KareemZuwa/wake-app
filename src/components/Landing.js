import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/Logo.svg';
import welcome from '../assets/svg/Welcome.svg';
import Fab from '@material-ui/core/Fab';

function Landing() {
    return (
        <section className='landing-wrapper'>
            <img className='welcome'src={welcome} alt='welcome' />
            <img src={logo} alt='logotype' />


        
            <Link to='/addalarm'>
            <Fab className='set-alarm-button' variant="contained" color="primary">Set Alarm</Fab>
            </Link>

            
        </section>
    )
}

export default Landing

/* import Button from '@material-ui/core/Button';

function App() {
return (
<Button variant="contained" color="primary">
Hello World
</Button>
);
}
*/
