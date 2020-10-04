// Creacicion de una funcion para traer la informacion desde la api 
import axios from 'axios';

export default async function login(usuario, password,setLoginData){
  axios.post('http://localhost:4000/api/login/', {
    usuario: usuario,
    password: password
  })
  .then(function (response) {
    localStorage.setItem('token', JSON.stringify(response.data));
    setLoginData(response.data)
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
}