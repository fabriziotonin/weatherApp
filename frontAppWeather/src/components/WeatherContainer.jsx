import React from 'react';
import  Login  from './Login';
import Weather from './Weather';



const WeatherContainer = ({ clima, loginData, setLoginData,login,setClima,weather }) => {
 
  // utilizo un switch para ver la info que traigo desde el back para cambiar el estilo del fondo segun el dia 
  let divStyle;
  switch(clima.day){
    case "nublado" :
      divStyle ={
        backgroundImage: "url(https://media.giphy.com/media/Yl5QvMg3Zxfe9g6HvM/giphy.gif)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }
    break
    case "soleado" :
      divStyle ={
        backgroundImage: "url(https://media.giphy.com/media/RKKuHfro5vNcgAyxyb/giphy.gif)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }
    break
    case "lluvia" :
      divStyle ={
        backgroundImage: "url(https://media.giphy.com/media/1guRIRFyb1s1UsBaZ0c/giphy.gif)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }
    break
    default:
      divStyle =  {backgroundColor: 'white'}
  }
  

  // controlo si el usuario esta logeado o no para mostrar un formulario con un ternario
  return (
    <>
      {
        loginData.token ? (
          <div style={divStyle}>
           <Weather 
           setClima={setClima}
           clima={clima}
           weather={weather}
           />
          </div>
        )
          :
          (
           
            <Login 
            setLoginData={setLoginData}
            loginData={loginData}
            login={login}
             />
          )
      }
    </>
  )
}


export default WeatherContainer;