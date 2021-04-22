
import './AlarmPage.css';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


const OffBtn = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          width: 300 + theme.spacing(3) * 2,
        },
        margin: {
          height: theme.spacing(3),
        },
      }));
    const PrettoSlider = withStyles({
        root: {
          color: '#877689',
          width: 195,
          position: 'relative',
          paddingBottom: 100,
        },
        thumb: {
          height: 90,
          width: 90,
          backgroundColor: '#F7D859',
          border: '2px solid #ffffff',
          marginTop: -5,
          marginLeft: -12,
          paddingRight: 24,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 70,
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          paddingRight: 10,
          border: '5px solid #ffffff',
        },
        rail: {
            
          height: 70,
          borderRadius: 50,
          border: '5px solid #ffffff',
        },
      })(Slider);


        const classes = useStyles();
      
        return (
          <div className={classes.root}>   
            <Typography gutterBottom>OFF</Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} />
            <div className={classes.margin} />
          </div>
        );

}
 
export default OffBtn;