import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, Accordion,AccordionSummary, AccordionDetails, 
    Typography, Icon, AppBar, Toolbar, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  }));
  
export default function AddAlarm() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <header>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuSharpIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AddCircleIcon />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
            
            </header>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
    )
}
