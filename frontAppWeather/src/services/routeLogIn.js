// Creacicion de una funcion para traer la informacion desde la api 
import axios from 'axios';

export default function login({usuario, password},setLoginData){
  // le paso a travez de body el usuario y la contraseña 
  axios.post('http://localhost:4000/api/login/', {
    usuario: usuario,
    password: password
  })
  .then( function (response) {
    // coloco el token y la info en el local storage para poder manipular el logeo y la informacion 
    localStorage.setItem('token', JSON.stringify(response.data));
    setLoginData(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}