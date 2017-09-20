import React from 'react';

import moment from 'moment';
import 'moment-timezone';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      california: moment().tz('America/Los_Angeles').format('LTS'),
      indiana: moment().tz('America/New_York').format('LTS')
    };
    this.tick = this.tick.bind(this);
    this.getAnalogRotation = this.getAnalogRotation.bind(this);

    window.state = this.state;
  }

  componentDidMount() {
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }


  getAnalogRotation() {
    let currentTime, hours, minutes, seconds = "";
    if (this.props.location === "california") {
      currentTime = this.state.california;
      seconds = moment().tz('America/Los_Angeles').format('ss');
      minutes = moment().tz('America/Los_Angeles').format('mm');
      hours = moment().tz('America/Los_Angeles').format('h');
    } else if (this.props.location === "indiana") {

    }

    if (hours === "12") {
      hours = "0";
    }

    let secondDegree = parseInt(seconds);
    let minuteDegree = (parseInt(minutes) * 60) + secondDegree;
    let hoursDegree = (parseInt(hours) * 3600) + minuteDegree;
    let ret = [
      hoursDegree / 120, // 12 hours
      minuteDegree / 10, // 60 minutes
      secondDegree * 6 // 60 seconds
    ];
    return ret;
  }

  tick() {
    this.setState({
      california: moment().tz('America/Los_Angeles').format('LTS'),
      indiana: moment().tz('America/New_York').format('LTS')
    });
    let rotationDegrees = this.getAnalogRotation();
    let second = document.getElementById("second");
    second.style.transform = `rotate(${rotationDegrees[2]}deg)`
    let minute = document.getElementById("minute");
    minute.style.transform = `rotate(${rotationDegrees[1]}deg)`
    let hour = document.getElementById("hour");
    hour.style.transform = `rotate(${rotationDegrees[0] + 90}deg)`
  }

  render() {
    let digitalDisplay = "";
    if (this.props.location === "california") {
      digitalDisplay = this.state.california;
    } else if (this.props.location === "indiana") {
      digitalDisplay = this.state.indiana;
    }

    return (
      <div className="clock">
        <div className="digital-clock">
          <p>
            <span>{digitalDisplay}</span>
          </p>
        </div>
        <div className="analog-circle">
          <div className="analog-face">
            <div id="hour" className="analog-hour"></div>
            <div id="minute" className="analog-minute"></div>
            <div id="second" className="analog-second"></div>
          </div>
        </div>
      </div>
    )
  }
};

export default Clock;
