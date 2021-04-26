import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import {
  makeStyles, withStyles, Accordion, AccordionSummary, AccordionDetails,
  Typography, Button, Grid, AppBar, Toolbar, IconButton, Container, Link as MUiLink, TextField, 
  Select, MenuItem, FormControl, InputLabel, InputBase, FormControlLabel, Checkbox
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
import Nav from './Nav'


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 30,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: 'Roboto',
    '&:focus': {
      borderRadius: 30,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

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
  },
  margin: {
    margin: theme.spacing(1),
    display:'flex',
    justifyContent: 'space-between'
  },
  formLabels:{
    padding: 20,
    backgroundColor:"#FFF",
    borderRadius: 30,
    display: 'flex',
    justifyContent:'flex-start',
    alignContent:'center'
  }
}));

export default function AddAlarm(props) {

  const { alarms, setAlarm } = props;

  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [sound, setSound] = useState("");
  const [repeat, setRepeat] = useState(false);
  const [snooze, setSnooze] = useState(false);

  const allAlarmSounds = ["classicAlarmSound", "cuteAlarmSound", "elevatedAlarmSound", "extremeAlarmSound", "natureAlarmSound", "wakeupAlarmSound"];

  const classes = useStyles();

  const [classicAlarmSound] = useSound(ClassicAlarm, { volume: 0.25})
  const [cuteAlarmSound] = useSound(CuteAlarm, { volume: 0.25})
  const [elevatedAlarmSound] = useSound(ElevatedAlarm, { volume: 0.25})
  const [extremeAlarmSound] = useSound(ExtremeAlarm, { volume: 0.25})
  const [natureAlarmSound] = useSound(NatureAlarm, { volume: 0.25})
  const [wakeupAlarmSound] = useSound(WakeUp, { volume: 0.25})
 
    const submitHandle = (e) => {
      e.preventDefault();
    }

  return (
    <div>
      <Container maxWidth="xs" style={{ backgroundColor: '#555AA3' }}>
        <form onSubmit={submitHandle}>
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

          <FormControlLabel className={classes.formLabels}
              label={<Typography style={classes.formControlLabel}>Time</Typography>}
              control={<TextField value={time} onChange={(e) => setTime(e.target.value)} color="primary" />}
              labelPlacement="start"
          />

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
                <TextField onChange={ (e) => setTime(e.target.value)} />
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
                  sit amet blandit leo lobortis eget.</Typography>
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

                <Grid container justifyContent="center" alignContent="flex-start">
                  
                    <Grid item xs>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={sound}
                        onChange={(e) => setSound(e.target.value)}
                      >
                        {
                          allAlarmSounds.map( item => 
                            <MenuItem key={item} value={item} primaryText={item} />
                          )
                        }
                      </Select>
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
        </form>
      </Container>
    </div>
  )
}
