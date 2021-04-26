import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import AlarmPage from './components/AlarmPage'
import SettingsPage from './components/SettingsPage'
import AddAlarm from './components/AddAlarm';
import SetAlarm from './components/SetAlarm';

import Nav from './components/Nav'



function App() {
  //# ALARM-SIDAN (ELISABETH)
  //OFF-BTN-STATUS ÄR FALSE TILLS MAN KLICKAR, SNOOZE-BTN-STATUS ÄR FALSE TILLS MAN KLICKAR ....
  const [offbtn, setOffBtn] = useState(false);
  const [snoozebtn, setSnoozeBtn] = useState(false);

  //SIDA #4, SET-ALARM PAGE (NOORA)
  //BESTÄMMER TID FÖR ALARM, BESTÄMMER VAL AV LJUD FÖR ALARM, BESTÄMMER OM SNOOZE SKA FINNAS OCH VILKEN TIDSINTERVALL
  const [alarmtime, setAlarmTime] = useState(0);
  const [alarmsound, setAlarmSound] = useState('');
  const [snoozetime, setSnoozeTime] = useState(5);

  const [storeAlarms, setStoreAlarms] = useState([{}]);


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Landing } ></Route>
        <Route exact path ='/addalarm' render={ (props) => <AddAlarm allAlarms={storeAlarms} setAlarmAdder={setStoreAlarms} {...props} />} ></Route>
        <Route exact path ='/SetAlarm' render={(props) => <SetAlarm allAlarms={storeAlarms}  {...props}/>}></Route>

        <Route exact path='/Alarms'><AlarmPage coloranimation={coloranimation} alarmtime={alarmtime} snoozetime={snoozetime} offbtn={offbtn} setOffBtn={setOffBtn} snoozebtn={snoozebtn} setSnoozeBtn={setSnoozeBtn}/></Route>

        <Route exact path='/Alarms'><AlarmPage alarmtime={alarmtime} snoozetime={snoozetime} offbtn={offbtn} setOffBtn={setOffBtn} snoozebtn={snoozebtn} setSnoozeBtn={setSnoozeBtn}/></Route>
        <Route exact path='/Settings'><SettingsPage/></Route>
        <Route exact path='/Nav'><Nav/></Route>
      </Switch>
  
    </div>
  );
}

export default App;
