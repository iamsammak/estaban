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
      fremontID: 2407405,
      mishiwakaID: 2452303
    };
  }

  componentDidMount() {
    // let watchID = navigator.geolocation.watchPosition(
    //   function(location) {
    //     console.log(location);
    //   }
    // );
    // this.setState({ watchID: watchID });
    $(function(){

      // Specify the ZIP/location code and units (f or c)
      var loc = `${this.state.fremontID}`; // or e.g. SPXX0050
      var u = 'f';

      var query = "SELECT item FROM weather.forecast WHERE woeid='" + loc + "' AND u='" + u + "'";
      var cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
      var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;

      window['wxCallback'] = function(data) {
        console.log(data);
          var info = data.query.results.channel.item.condition;
          $('#wxIcon').css({
              backgroundPosition: '-' + (61 * info.code) + 'px 0'
          }).attr({
              title: info.text
          });
          $('#wxIcon2').append('<img src="http://l.yimg.com/a/i/us/we/52/' + info.code + '.gif" width="34" height="34" title="' + info.text + '" />');
          $('#wxTemp').html(info.temp + '&deg;' + (u.toUpperCase()));
      };

      $.ajax({
          url: url,
          dataType: 'jsonp',
          cache: true,
          jsonpCallback: 'wxCallback'
      });
    });
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
