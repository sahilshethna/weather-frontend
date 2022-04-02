import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { weatherData } from '../store/weatherData'
import { useReactiveVar } from '@apollo/client';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from "@fortawesome/free-solid-svg-icons"

var rootStyle = {
  height: '100vh',
  minheight: '100vh',
  backgroundColor: "#04a7ea"
}

const Forecast = () => {

  const history = useHistory();
  const weatherInfo = useReactiveVar(weatherData);
  //console.log(weatherInfo);

  if (!weatherInfo) {
    history.push('/');
  }

  return (
    <div style={rootStyle}>
      <div style={{ textAlign: "center" }} className="pt-3"><Link to="/" className='btn btn-secondary'>Home</Link></div>
      {
        weatherInfo ?

          <div style={{ width: '60vh', minheight: '100vh', backgroundColor: "#ffffff", position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <h3 className='pt-5 pb-5' style={{ textAlign: "center" }}> <FontAwesomeIcon icon={faCloud} size="lg" /> <br />{weatherInfo.getWeatherData.temp}&#8457; <br />{weatherInfo.getWeatherData.description} </h3>

            <div className='row'>
              <p className='col-6 pl-5'>Humidity : {weatherInfo.getWeatherData.Humidity}%</p>
              <p className='col-6 pl-5'>Wind speed : {weatherInfo.getWeatherData.windspeed} mph</p>
            </div>

          </div>
          
          : null
      }
    </div>
  );
}

export default Forecast;