import React, { useEffect } from 'react';
import  Login  from './Login';
import Weather from './Weather/Weather';



const WeatherContainer = ({ clima, loginData, setLoginData,login,setClima,weather }) => {

  // controlo si el usuario esta logeado o no para mostrar un formulario 
  return (
    <>
      {
        loginData.token ? (
          <>
           <Weather 
           setClima={setClima}
           clima={clima}
           weather={weather}
           />
          </>
        )
          :
          (
           
            <Login 
            setLoginData={setLoginData}
            login={login}
             />
          )
      }
    </>
  )
}


export default WeatherContainer;