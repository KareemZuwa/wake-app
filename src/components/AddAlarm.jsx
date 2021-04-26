import React, { useState } from 'react'
import {
  makeStyles, Typography, AppBar, Toolbar, IconButton, Container, Link as MUiLink, TextField, 
  Select as MuiSelect, MenuItem, FormControlLabel, Checkbox
} from '@material-ui/core';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '../assets/svg/alarm-icon.svg'

import { withRouter, useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
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
  formControlLabels: {
    fontWeight:'bold'
  },
  root:{
    padding: theme.spacing(2),
    backgroundImage:"linear-gradient(to right, orange , white)",
    borderRadius: 50,
    display: 'flex',
    justifyContent:'space-between',
    alignContent:'flex-start',
    '& .labelPlacementStart' :{
      margin: theme.spacing(2),
    }
  },
  innerDivs : {
    padding : theme.spacing(1),
  },

}));

function AddAlarm(props) {

  const { allAlarms, setAlarmAdder } = props;
  let history = useHistory();

  const [time, setTime] = useState("00:00");
  const [name, setName] = useState("");
  const [sound, setSound] = useState("classicAlarmSound");
  const [repeat, setRepeat] = useState(true);
  const [snooze, setSnooze] = useState(true);

  const allAlarmSounds = [
    {"sound" : "Classic", "soundAudio" : "classicAlarmSound"},
    {"sound" : "Cute", "soundAudio" : "cuteAlarmSound"},
    {"sound" : "Elevated ", "soundAudio" : "elevatedAlarmSound"},
    {"sound" : "Extreme", "soundAudio" : "extremeAlarmSound"},
    {"sound" : "Nature", "soundAudio" : "natureAlarmSound"},
    {"sound" : "Wake-Up", "soundAudio" : "wakeupAlarmSound"}
  ];

  const classes = useStyles();


 
    const submitHandle = (e) => {
      e.preventDefault();
      
      const newAlarm = { time, name, sound, repeat, snooze };

      setAlarmAdder(prevAlarms => [...prevAlarms, newAlarm]);
      //alert(`Alarm set to go off at ${time}`);
      history.push('/setalarm');
    }

  return (
    <div>
      <Container maxWidth="xs" style={{ backgroundColor: '#555AA3', borderRadius: 10 }}>
        <form onSubmit={submitHandle} noValidate autoComplete="off">
          <header>
            <AppBar position="static" color="transparent" elevation={0}>
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                  <MenuSharpIcon className={classes.svg_icons} />
                </IconButton>
                <IconButton edge="start" className={classes.rightToolbar} color="inherit" aria-label="circle" type="submit">
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

          <div style={{ paddingBottom: 10}}>

            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Time</Typography>}
                  control={<TextField value={time} onChange={(e) => setTime(e.target.value)} InputProps={{ disableUnderline: true }} />}
                  labelPlacement="start"
              />
            </div>
            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Name</Typography>}
                  control={<TextField value={name} onChange={(e) => setName(e.target.value)} InputProps={{ disableUnderline: true }} />}
                  labelPlacement="start"
              />
            </div>
            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Sound</Typography>}
                  control={
                    <MuiSelect
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={sound}
                        onChange={(e) => setSound(e.target.value)}
                        disableUnderline
                        fullWidth
                        style={{ border: 0}}
                      >
                        {
                          allAlarmSounds.map( item => 
                            <MenuItem key={item.soundAudio} value={item.soundAudio}>{item.sound}</MenuItem>
                          )
                        }
                    </MuiSelect>
                  }
                  labelPlacement="start"
              />
            </div>
            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Repeat</Typography>}
                  control={<Checkbox
                    checked={repeat}
                    onChange={(e) => setRepeat(e.target.checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />}
                  labelPlacement="start"
              />
            </div>
            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Snooze</Typography>}
                  control={<Checkbox
                    checked={snooze}
                    onChange={(e) => setSnooze(e.target.checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />}
                  labelPlacement="start"
              />
            </div>

          </div>
        </form>
      </Container>
    </div>
  )
}

export default withRouter(AddAlarm)
