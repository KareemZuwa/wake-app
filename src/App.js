import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';



function App() {
  //# ALARM-SIDAN (ELISABETH)
  //OFF-BTN-STATUS ÄR FALSE TILLS MAN KLICKAR, SNOOZE-BTN-STATUS ÄR FALSE TILLS MAN KLICKAR ....
  const [offbtn, setOffBtn] = useState(false);
  const [snoozebtn, setSnoozeBtn] = useState(false);

  //SIDA #4, SET-ALARM PAGE (NOORA)
  //BESTÄMMER TID FÖR ALARM, BESTÄMMER VAL AV LJUD FÖR ALARM, BESTÄMMER OM SNOOZE SKA FINNAS OCH VILKEN TIDSINTERVALL
  const [alarmtime, setAlarmTime] = useState(0);
  const [alarmsound, setAlarmSound] = useState('');
  const [snoozesime, setSnoozeTime] = useState(5);


  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Landing /></Route>
      </Switch>
  
    </div>
  );
}

export default App;
