
import './AlarmPage.css';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from 'react';


const OffBtn = (props) => {
    const setOffBtn= props.setOffBtn
    const offBtnState = props.offbtn
    console.log(offBtnState);
    const useStyles = makeStyles((theme) => ({
        root: {
          width: 300 + theme.spacing(3) * 2,
        },
      }));
 
      const AirbnbSlider = withStyles({
        root: {
            color: '#877689',
            width: 195,
            position: 'relative',
            paddingBottom: 95,
          },
          thumb: {
            color: '#000000',
            fontSize: 35,
            height: 90,
            width: 90,
            backgroundColor: '#F7D859',
            border: '2px solid #ffffff',
            marginTop: -5,
            marginLeft: -12,
            '&$active': {
                backgroundColor: '#FCB64E',
                color: '#ffffff',
              },
            '&:focus, &:hover': {
              boxShadow: 'inherit',
              transition: 'all .2s ease-in',
            },
          },
          active: {},
          track: {
            height: 70,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            paddingRight: 10,
            border: '5px solid #ffffff',
            transition: 'all .2s ease-in',
          },
          rail: {
            height: 70,
            borderRadius: 50,
            border: '5px solid #ffffff',
            transition: 'all .2s ease-in',
          },
      })(Slider);
   
      function AirbnbThumbComponent(props) {
          console.log(offBtnState);
        if (!offBtnState){
            return (
            <span {...props}>
                Off
            </span>
            );
        } else {
            return (
                <h1>Alarm is off</h1>
                );
        }
      }
      
      function slideEvent(e) {
          let newValue = e.target.parentElement.children[2].value;
        if (newValue >= 100) {
            setOffBtn(true)
        } 
      }
        const classes = useStyles();
        console.log(offBtnState);
        if (!offBtnState){
            return (
                <div className={classes.root}>  
                  <AirbnbSlider
                      onChange={slideEvent}
                      ThumbComponent={AirbnbThumbComponent}
                  />
                </div>
              );
        } else {
            return (
                <h1 className="alarm-off-h1">Alarm off</h1>
                );
        }
}
 
export default OffBtn;