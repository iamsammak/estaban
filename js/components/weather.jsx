import React from 'react';
import axios from 'axios';

import { WOEIDS, DayInWords } from './weather_util';

import {
  cloudy, rainy, snowy, sunny, sunny_with_wind, clear_night,
  cloudy_with_sun, cloudy_with_lightning, cloudy_with_moon, cloudy_with_rain_and_lightning
} from './weather_icons';

const CODE_TO_ICON = {
  0: "tornado",
  1: "tropical storm",
  2: "hurricane",
  3: cloudy_with_lightning,
  4: cloudy_with_lightning,
  5: snowy,
  6: rainy,
  7: snowy,
  8: rainy,
  9: rainy,
  10: rainy,
  11: rainy,
  12: rainy,
  13: snowy,
  14: snowy,
  15: snowy,
  16: snowy,
  17: snowy,
  18: snowy,
  19:	"dust",
  20:	"foggy",
  21:	"haze",
  22:	"smoky",
  23: sunny_with_wind,
  24: sunny_with_wind,
  25:	"cold",
  26: cloudy,
  27: cloudy_with_moon,
  28: cloudy_with_sun,
  29: cloudy_with_moon,
  30: cloudy_with_sun,
  31: clear_night,
  32: sunny,
  33: clear_night,
  34: sunny,
  35: rainy,
  36: sunny,
  37: cloudy_with_lightning,
  38: cloudy_with_lightning,
  39: cloudy_with_lightning,
  40: rainy,
  41: snowy,
  42: snowy,
  43: snowy,
  44: cloudy,
  45: cloudy_with_rain_and_lightning,
  46: snowy,
  47: cloudy_with_rain_and_lightning
};

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      woeID: 2407405, //defaults to fremont woeID
      unit: "f",
      today: {},
      forecast: []
    };
  }

  componentDidMount() {
    let woeID;
    if (this.props.location == null) {
      woeID = this.state.woeID;
    } else {
      woeID = WOEIDS[this.props.location];
    }

    let unit = this.state.unit;

    let query = `SELECT item FROM weather.forecast WHERE woeid='${woeID}' AND u='${unit}'`;
    let cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
    let url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;

    axios.get(url)
      .then(res => {
        let today = res.data.query.results.channel.item.condition;
        let forecast = res.data.query.results.channel.item.forecast;
        this.setState({
          today: today,
          forecast: forecast
        });
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  render() {
    let currentDay = DayInWords[new Date().getDay()];
    let currentTemp = this.state.today.temp + String.fromCharCode(176);
    let todayIcon = CODE_TO_ICON[this.state.today.code];

    let forecast = this.state.forecast.map((weather, idx) => {
      if (idx == 0) {
        return;
      }
      let icon = CODE_TO_ICON[weather.code];
      let day = weather.day;
      let key = `forecast-${idx}`;

      let title = `High: ${weather.high}  Low: ${weather.low}`;
      return (
        <div key={key} title={title} className="forecast-item">
          <span className="day">{day}</span>
          {icon}
        </div>
      );
    });

    return(
      <div className="weather container">
        <div className="elements">
          <div className="weather-today">
            <span className="title">{currentDay}</span>
            <div className="today-container">
              {todayIcon}
              <span className="current-temp">{currentTemp}</span>
            </div>
          </div>
          <div className="forecast-list">
            {forecast}
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
