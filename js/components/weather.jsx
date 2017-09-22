import React from 'react';

import {
  cloudy, rainy,
  cloudy_with_sun, cloudy_with_lightning, cloudy_with_moon,
  cloudy_with_rain_and_lightning, sunny, sunny_with_wind,
  clear_night, snowy } from './weather_icons';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherOne: null,
      weatherTwo: null
    };
  }

  componentDidMount() {
    // let watchID = navigator.geolocation.watchPosition(
    //   function(location) {
    //     console.log(location);
    //   }
    // );
    // this.setState({ watchID: watchID });
  }

  componentWillUnmount() {
    // navigator.geolocation.clearWatch(this.state.watchID);
  }



  render() {

    return(
      <div className="weather container">
        <div className="elements">
          {cloudy}
          {rainy}
          {cloudy_with_sun}
          {cloudy_with_lightning}
          {cloudy_with_moon}
          {cloudy_with_rain_and_lightning}
          {sunny}
          {clear_night}
          {sunny_with_wind}
          {snowy}
        </div>
      </div>
    );
  }
};

export default Weather;
