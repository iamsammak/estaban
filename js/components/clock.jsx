import React from 'react';

import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    debugger
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  tick() {
    this.setState({time: moment()});
  }

  render() {

    return (
      <div>

      </div>
    )
  }
};

export default Clock;
