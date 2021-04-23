import './AlarmPage.css'

const SnoozeBtn = (props) => {
    const setSnoozeBtn= props.setSnoozeBtn
    const snoozebtn = props.snoozebtn
    const turnOff = () => {
        return snoozebtn ? setSnoozeBtn(false) : setSnoozeBtn(true);
      } 

    return ( 
        <button onClick={turnOff} className="snooze-btn">Snooze</button>

     );
}
 
export default SnoozeBtn;