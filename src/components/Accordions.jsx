import React from 'react'
import {
    makeStyles, Accordion, AccordionSummary, AccordionDetails,Typography } from '@material-ui/core';

const Accordions = (props) => {
    return (
        <div>
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
        </div>
    )
}

export default Accordions
