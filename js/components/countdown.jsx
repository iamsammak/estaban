import React from 'react';
import moment from 'moment';

import Boat from './boat';

import { getDateString, secondsToHours } from './countdown-util';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Next Adventure",
      left: "days",
      number: 69,
      targetMoment: "2017-12-14 18:05:00"
    };
    // this.updateDays = this.updateDays.bind(this);
    // no need to bind this because updateDays isn't being called inside render
    // or rather not outside the scope where this will differ from being Countdown object
  }

  componentDidMount() {
    this.updateDays();
    // this.logDiffs();
  }

  updateDays() {
    let current = moment().format("YYYY-MM-DD hh:mm:ss");
    let armyTime = moment().format("YYYY-MM-DD HH:mm:ss");
    let target = moment(this.state.targetMoment);
    let daysLeft = target.diff(current, "days");
    if (daysLeft == 0) {
      // let hoursLeft = target.diff(armyTime, "hours");
      let secondsLeft = target.diff(armyTime, "seconds");
      let hoursLeft = secondsToHours(secondsLeft);

      this.setState({ left: "hours", number: hoursLeft });
    } else {
      this.setState({ left: "days", number: daysLeft })
    }
  }

  // for testing
  logDiffs() {
    let current = moment().format("YYYY-MM-DD HH:mm:ss");
    let target = moment(this.state.targetMoment);
    let hoursLeft = target.diff(current, "hours");
    let daysLeft = target.diff(current, "days");
    let secondsLeft = target.diff(current, "seconds");

    console.log("current", current);
    console.log("target", target);

    console.log("diff in days", daysLeft);
    console.log("diff in hours", hoursLeft);
    console.log("diff in seconds", secondsLeft);
  }

  render() {

    return(
      <div className="countdown-container">
        <div className="countdown-title">{this.state.title}</div>
        <div className="calendar-container">
          <span className="bind-1 binds"></span>
          <span className="bind-2 binds"></span>
          <span className="bind-3 binds"></span>
          <span className="bind-4 binds"></span>
        	<span className="calendar-top">{this.state.left} left</span>
          <div className="calendar-number">
            <span>{this.state.number}</span>
          </div>
        </div>
      </div>
    )
  }
};

export default Countdown;
//
// <form
//   className="countdown-form">
//   <label>
//     <input type="text"></input>
//   </label>
//
//   <button>Enter</button>
// </form>

// updateDays() {
  // this method has a problem because of moment.js API
  // console.log(moment("20171013", "YYYYMMDD").fromNow());
  // let waitString = moment("20171013", "YYYYMMDD").fromNow();
  // let waitNum = parseInt(waitString.match(/\d+/g));
  // this.setState({ number: waitNum })
// }
