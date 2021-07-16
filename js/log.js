


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
       const {status} = respuesta;
      
        console.log(respuesta);
        console.log(status);
       
      
        if(status === 400) {
            console.log('Acceso incorrecto')
        } else if(status===200) {
          window.location.href="../pr/index.html"
            console.log(respuesta);
        }
      })
      .catch(error => {
        console.log(error)
      });

}
