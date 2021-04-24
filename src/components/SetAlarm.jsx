import React, { useRef, useEffect } from "react";
import { makeStyles, AppBar, Toolbar, IconButton, Container } from '@material-ui/core';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    rightToolbar:{
        marginLeft: "auto"
    },
    menuButton: {

    },
    svg_icons:{
        transform : 'scale(1.8)',
        color: 'white'
      },
}));

export default function SettAlarm() {
    const classes = useStyles();

    const hourHand = useRef(null);
    const minuteHand = useRef(null);
    const secondHand = useRef(null);

    useEffect(() => {

        const rotate = () => {
            // get the current Date object from which we can obtain the current hour, minute and second
            const currentDate = new Date();
    
            // get the hours, minutes and seconds
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();
    
             // rotating fraction --> how many fraction to rotate for each hand.
            const secondsFraction = seconds / 60;
            const minutesFraction = (secondsFraction + minutes) / 60;
            const hoursFraction = (minutesFraction + hours) / 12;
    
            // actual deg to rotate
            const secondsRotate = secondsFraction * 360;
            const minutesRotate = minutesFraction * 360;
            const hoursRotate = hoursFraction * 360;
    
            // apply the rotate style to each element
            // use backtick `` instead of single quotes ''
            secondHand.current.style.transform = `rotate(${secondsRotate}deg)`;
            minuteHand.current.style.transform = `rotate(${minutesRotate}deg)`;
            hourHand.current.style.transform = `rotate(${hoursRotate}deg)`;
        }
    
        // for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
        setInterval(() => {
            rotate();
        }, 1000);   

    }, [])

    
    return (
        <div>
            <Container maxWidth="xs" style={{ backgroundColor:'#555AA3'}}>
                <header>
                    <AppBar position="static" color="transparent" elevation={0}>
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuSharpIcon className={classes.svg_icons}/>
                            </IconButton>
                            <IconButton edge="start" className={classes.rightToolbar} color="inherit" aria-label="circle">
                                <AddCircleIcon className={classes.svg_icons}/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                
                </header>   
                <div style={{ display: 'flex', justifyContent:"center", marginTop:40}}>
                    <div class="clock">
                        <div className="hand minute" ref={minuteHand}></div>
                        <div className="hand hour" ref={hourHand}></div>
                        <div className="hand second" ref={secondHand}></div>
                    </div>
                </div>
            </Container>
        </div>
)}