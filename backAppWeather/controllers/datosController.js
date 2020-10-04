const datos = [
  {
      id: 1,
      country: "Argentina",
      province: "Tucuman",
      temp: 35,
      max_temp: 40,
      min_temp: 28,
      day: "nublado",
      icon: "https://img.icons8.com/cotton/64/000000/clouds--v2.png",
      humedity: 78,
      longitud: -26.82102327577041,
      latitud: -65.21110785723238
  }, {
      id: 2,
      country: "Argentina",
      province: "Bs Aires",
      temp: 27,
      max_temp: 33,
      min_temp: 23,
      day: "soleado",
      icon: "https://img.icons8.com/cute-clipart/64/000000/sun.png",
      humedity: 58,
      longitud: -34.649572601989725,
      latitud:-58.400458018546445
  }, {
      id: 3,
      country: "Uruguay",
      province: "Montevideo",
      temp: 30,
      max_temp: 35,
      min_temp: 30,
      day: "soleado",
      icon: "https://img.icons8.com/cute-clipart/64/000000/sun.png",
      humedity: 30,
      longitud:-34.87268764536522,
      latitud: -56.178634179171326
  }, {
      id: 4,
      country: "Inglaterra",
      province: "Londres",
      temp: 12,
      max_temp: 19,
      min_temp: 11,
      day: "lluvia",
      icon: "https://img.icons8.com/fluent/48/000000/torrential-rain.png",
      humedity: 80,
      longitud: 51.45357145756672,
      latitud: -0.13227178074411539
  },
]

// traigo el id con los paramesquery y devuelvo el que coincide como si fuer un metodo findOne de mongoose
exports.datos = (req, res) => {
  let id = req.query.id
  const country = datos.find((item)=>{
  return item.id == id
  }) 
  if(country){
    // mando la respuesta 
      res.send(country)
  }else{
    res.json({ mensaje: "El pais no existe"})
  }
}