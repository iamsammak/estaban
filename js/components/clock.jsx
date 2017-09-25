import React from 'react';

import moment from 'moment';
import 'moment-timezone';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      california: moment().tz('America/Los_Angeles').format('LTS'),
      indiana: moment().tz('America/Indiana/Indianapolis').format('LTS')
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
      currentTime = this.state.indiana;
      seconds = moment().tz('America/Indiana/Indianapolis').format('ss');
      minutes = moment().tz('America/Indiana/Indianapolis').format('mm');
      hours = moment().tz('America/Indiana/Indianapolis').format('h');
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
      indiana: moment().tz('America/Indiana/Indianapolis').format('LTS')
    });
    let rotationDegrees = this.getAnalogRotation();
    let second = document.getElementById(`second-${this.props.location}`);
    second.style.transform = `rotate(${rotationDegrees[2]}deg)`
    let minute = document.getElementById(`minute-${this.props.location}`);
    minute.style.transform = `rotate(${rotationDegrees[1]}deg)`
    let hour = document.getElementById(`hour-${this.props.location}`);
    hour.style.transform = `rotate(${rotationDegrees[0] + 90}deg)`
  }

  render() {
    // digital clock
    let momentObj = '';
    let location = "";
    if (this.props.location === "california") {
      momentObj = moment().tz('America/Los_Angeles');
      location = "fremont, ca";
    } else if (this.props.location === "indiana") {
      momentObj = moment().tz('America/Indiana/Indianapolis');
      location = "mishiwaka, in";
    }

    let hours = momentObj.format("hh");
    let minutes = momentObj.format("mm");

    // date and location
    let date = momentObj.format("MMM Do");

    // analog clock
    let hourID = `hour-${this.props.location}`;
    let minuteID = `minute-${this.props.location}`;
    let secondID = `second-${this.props.location}`;

    return (
      <div className="clock">
        <div className="digital-container">
          <div className="digial-clock">
            <div className="digital-hour">{hours}</div>
            <div className="digital-minute">{minutes}</div>
          </div>
          <hr />
          <div className="location-container">
            <div>{date}</div>
            <div>{location}</div>
          </div>
        </div>
        <div className="analog-container">
          <div className="analog-circle">
            <div className="analog-face">
              <div id={hourID} className="analog-hour"></div>
              <div id={minuteID} className="analog-minute"></div>
              <div id={secondID} className="analog-second"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Clock;
