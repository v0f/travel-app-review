import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LangContext from '../../Language-context/LangContext';
import dict from '../../../data/dictionary';

interface IWeather {
  capitalNameEN: string;
}

 const Weather: React.FC<IWeather> = ({ capitalNameEN }) => {
    const { lang } = React.useContext(LangContext);

    const [ weatherIcon, setWeatherIcon ] = useState<string>('weather-icon owf');
    const [ temperature, setTemperature] = useState<string>('');
    const [ wind, setWind] = useState<string>('');
    const [ humidity, setHumidity] = useState<string>('');
    const [ weatherDescription, setWeatherDescription] = useState<string>('');

    useEffect(() => {

        async function getWeather(capital : string): Promise<void> {

            const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=${lang}&appid=93f3893d8ca2513b9dff95fa5ec0f1ca&units=metric`;
            const response = await fetch(endpoint);
            const data = await response.json();

            try {
                setWeatherIcon(`weather-icon owf owf-${data.weather[0].id}`);
                setTemperature(`${Math.round(data.main.temp)}°C`);
                setWind(`${data.wind.speed} ${lang === 'en' ? 'm/s' : 'м/с'}`);
                setHumidity(`${data.main.humidity}%`);
                setWeatherDescription(data.weather[0].description);
              } catch(err) {
                    setWeatherIcon('');
                    setTemperature('');
                    setWind('');
                    setHumidity('');
                    setWeatherDescription(dict.weatherError[lang]);
              }

        }

        if (capitalNameEN) {
          getWeather(capitalNameEN)
        }

    }, [capitalNameEN, lang]);

  return (
    <Card className="widget weather">
      <CardContent className="weather-content">
        <i className={weatherIcon}/>
        <span className="temperature">
          {temperature}
        </span>
        <span className="weather-description">
          {weatherDescription}
        </span>
        <div className="wind-wrapper">
            <span className="wind">
            {wind}
            </span>
            <i className="fas fa-wind fa-1x"/>
        </div>
        <div className="humidity-wrapper">
            <span className="humidity">
            {humidity}
            </span>
            <i className=" fas fa-tint fa-1x"/>
        </div>
      </CardContent>
    </Card>
  );
}

export default Weather;