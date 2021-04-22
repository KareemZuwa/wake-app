
import React from 'react';
import { Link } from 'react-router-dom';
import alarmimg from '../assets/svg/alarm-img.svg';
import logo from '../assets/svg/Logo.svg';
import OffBtn from "./OffBtn"
import SnoozeBtn from "./SnoozeBtn"
import './AlarmPage.css'

const AlarmPage = () => {
    return ( 
        <section className="alarm-section">
            <img className="logo" src={logo} alt="logotype" />
            <img className="alarm-img" src={alarmimg} alt="alarm clock"/>
            <OffBtn />
            <SnoozeBtn />
        </section>
     );
}
 
export default AlarmPage;