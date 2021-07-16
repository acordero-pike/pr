


document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('#formulario');
formulario.addEventListener('click', consultarAPI);
})

function consultarAPI() {
const us = document.querySelector("#user");
const con = document.querySelector("#cont");
  console.log(con.value);

let url = `https://localhost:5001/api/Usuarios/${us.value},${con.value}`;

fetch(url)
      .then(respuesta => {
        console.log(respuesta);
      })
      .then(datos => {
       
      
        if(datos.status === "400") {
            console.log('Ciudad No Encontrada')
        } else {
            console.log(datos)
        }
      })
      .catch(error => {
        console.log(error)
      });

}


