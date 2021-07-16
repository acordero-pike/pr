


document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', consultarAPI);
})

function consultarAPI() {
const us = document.querySelector("#user");
const con = document.querySelector("#cont");
  console.log(con.value);

let url = `https://localhost:5001/api/Usuarios/${us.value},${con.value}`;

fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
       
      
        if(datos.cod === "404") {
            console.log('Ciudad No Encontrada')
        } else {
            console.log(datos)
        }
      })
      .catch(error => {
        console.log(error)
      });

}


