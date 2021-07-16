


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
       
      
      
       
      
        if(respuesta.status === "400") {
            console.log('Acceso incorrecto')
        } else if(respuesta.status==="200") {
            console.log(respuesta);
        }
      })
      .catch(error => {
        console.log(error)
      });

}


