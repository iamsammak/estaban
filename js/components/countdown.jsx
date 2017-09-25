import React from 'react';
import moment from 'moment';

import { getDateString } from './countdown-util';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Next Adventure",
      number: 69,
      targetDate: "2017-10-13"
    };
    this.updateDays = this.updateDays.bind(this);
  }

  componentDidMount() {
    this.updateDays();
  }

  updateDays() {
    let current = moment().format("YYYY-MM-DD");
    let target = moment(this.state.targetDate);
    let daysLeft = target.diff(current, "days")
    this.setState({ number: daysLeft })
  }

  render() {

    return(
      <div className="countdown-container">
        <div className="countdown-title">{this.state.title}</div>
        <div className="countdown-number">
          {this.state.number}
          <span>days</span>
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
