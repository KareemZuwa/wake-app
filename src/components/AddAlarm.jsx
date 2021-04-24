import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import {
  makeStyles, Accordion, AccordionSummary, AccordionDetails,
  Typography, Button, Grid, AppBar, Toolbar, IconButton, Container, Link as MUiLink
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '../assets/svg/alarm-icon.svg'
import ClassicAlarm from '../assets/sounds/ClassicAlarm.mp3'
import CuteAlarm from '../assets/sounds/CuteAlarm.mp3'
import ElevatedAlarm from '../assets/sounds/ElevatedAlarm.mp3'
import ExtremeAlarm from '../assets/sounds/ExtremeAlarm.mp3'
import NatureAlarm from '../assets/sounds/NatureAlarm.mp3'
import WakeUp from '../assets/sounds/WakeUp.mp3'

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
  menuButton:{
    fontSize: 50,
  },
  svg_icons:{
    transform : 'scale(1.8)',
    color: 'white'
  },
  accordionRound : {
    marginBottom:10, 
    borderRadius:30
  }
}));

export default function AddAlarm() {
  const classes = useStyles();

  const [classicAlarmSound] = useSound(ClassicAlarm, { volume: 0.25})
  const [cuteAlarmSound] = useSound(CuteAlarm, { volume: 0.25})
  const [elevatedAlarmSound] = useSound(ElevatedAlarm, { volume: 0.25})
  const [extremeAlarmSound] = useSound(ExtremeAlarm, { volume: 0.25})
  const [natureAlarmSound] = useSound(NatureAlarm, { volume: 0.25})
  const [wakeupAlarmSound] = useSound(WakeUp, { volume: 0.25})
 

  return (
  <div >
    <Container maxWidth="xs" style={{ backgroundColor: '#555AA3' }}>
      
        <header>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                <MenuSharpIcon className={classes.svg_icons} />
              </IconButton>
              <IconButton edge="start" className={classes.rightToolbar} color="inherit" aria-label="circle">
                <AddCircleIcon className={classes.svg_icons}/>
              </IconButton>
            </Toolbar>
          </AppBar>

        </header>
        
       
        <div style={{marginTop:40, marginBottom:40}}>
              <img src={AddIcon} className={classes.svg_icons} alt="image"/>
        </div>

       <div style={{color:'black', marginBottom: 15, display: "flex", justifyContent:"flex-end"}}>
        <MUiLink href="#" color="inherit" >
          Change
        </MUiLink>
       </div>

        <div style={{paddingBottom:50}}>
        <Accordion className={classes.accordionRound} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Time</Typography>
          </AccordionSummary>

          <AccordionDetails>
          <div id="alarm-clock"></div>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionRound}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Name</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionRound}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Sound</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container direction= "column" alignConten= "flex-start">
               
                <Grid item xs>
                  <Button onClick={classicAlarmSound}>Classic</Button>
                </Grid>
                <Grid item xs>
                  <Button onClick={cuteAlarmSound}>Cute tone</Button>
                </Grid>
                <Grid item xs>
                  <Button onClick={elevatedAlarmSound}>Elevated</Button>
                </Grid>
                <Grid item xs>
                  <Button onClick={extremeAlarmSound}>Extreme</Button>
                </Grid>
                <Grid item xs>
                  <Button onClick={natureAlarmSound}>Nature</Button>
                </Grid>
                <Grid item xs>
                  <Button onClick={wakeupAlarmSound}>Wake Up</Button>
                </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionRound}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Repeat</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionRound}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Snooze</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
          </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
      </Container>
    </div>

  )
}
