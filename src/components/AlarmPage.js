
import React from 'react';
import { Link } from 'react-router-dom';
import alarmimg from '../assets/svg/alarm-img.svg';
import logo from '../assets/svg/Logo.svg';
import OffBtn from "./OffBtn"
import SnoozeBtn from "./SnoozeBtn"
import './AlarmPage.css'

import styled, { ThemeProvider, useTheme } from '@material-ui/core/styles';
/* import styled, { ThemeProvider } from 'styled-components'; */
import NoSsr from '@material-ui/core/NoSsr';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';


const AlarmPage = (props) => {
    let offBtnStatus = props.offbtn;
    
    const theme = createMuiTheme({
        palette: {
            primary: {
              main: deepPurple[500],
            },
          },
        transitions: {
          duration: {
            complex: 375,
          },
        },
      });
      theme.transitions.create(['background-color', 'transform']);
    if (!offBtnStatus) {
    return ( 
        <section className="alarm-section">
            <img className="logo" src={logo} alt="logotype" />
            <img className="alarm-img" src={alarmimg} alt="alarm clock"/>
            <OffBtn offbtn={props.offbtn} setOffBtn={props.setOffBtn} />
            <SnoozeBtn snoozebtn={props.snoozebtn} setSnoozeBtn={props.setSnoozeBtn} />
        </section>
     );
     } else {
        return ( 
            <section className="alarm-section">
                <img className="logo" src={logo} alt="logotype" />
                <img className="alarm-img-off" src={alarmimg} alt="alarm clock"/>
                <OffBtn offbtn={props.offbtn} setOffBtn={props.setOffBtn} />
                <SnoozeBtn snoozebtn={props.snoozebtn} setSnoozeBtn={props.setSnoozeBtn} />
            </section>
         );
     }
}
 
export default AlarmPage;