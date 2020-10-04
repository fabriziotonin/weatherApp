import axios from 'axios';
// defino la ruta para traer el clima 
export default async function weather(setClima,id){
  // utilizo el metodo get para pasarle el id y el token
  const token = await JSON.parse(localStorage.getItem('token')) || {mensaje: "", token:""};

  const options = {
    params: {
      id: id
    },
    headers: {'access-token': token.token },
  };

  axios.get('http://localhost:4000/api/clima',
  options
  )
  // una ves permitido el acceso guardo la info de la respuesta para mostrar el clima 
    .then(function (response) {
    setClima(response.data)
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

