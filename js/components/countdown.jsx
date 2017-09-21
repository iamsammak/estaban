import React from 'react';

import moment from 'moment';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Next Naptime",
      number: 23
    };
    this.updateDays = this.updateDays.bind(this);
  }

  componentDidMount() {
    this.updateDays();
  }

  updateDays() {
    let waitString = moment("20171013", "YYYYMMDD").fromNow();
    let waitNum = parseInt(waitString.match(/\d+/g));
    this.setState({ number: waitNum })
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
