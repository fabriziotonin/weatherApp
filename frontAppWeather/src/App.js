import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';
import login from './services/routeLogIn';
import weather from './services/routeWeather';

export default function App() {
  const [clima, setClima] = useState({id: 1});
  const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem('token')) || []);
  

  useEffect(() => {
  }, [clima])
  
  return (
    <React.Fragment>
      <Header 
      loginData={loginData} 
      setLoginData={setLoginData}
      />
      <WeatherContainer 
      clima={clima} 
      setClima={setClima}
      setLoginData={setLoginData}
      loginData={loginData}
      login={login}
      weather={weather}
      />
    </React.Fragment>
  )
}