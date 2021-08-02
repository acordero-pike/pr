const requestUrl = `${URL}/estudiantes`

prearray = JSON.parse( localStorage.getItem('Llave') ) || []  ;
prearray.forEach( ar =>  {  token =ar.token})

  const myHeaders = new Headers();

myHeaders.append('Authorization', `Bearer ${token}  `);
myHeaders.append('Content-Type', 'application/json');  

const estudianteService = {
  getEstudiantes() {
    return fetch(requestUrl, {
      method: "GET",
    }).then((response) => response.json());
  },
  deleteEstudiante(idEstudiante) {
    return fetch(requestUrl, {
      method: "DELETE",
      headers:myHeaders,
      body: JSON.stringify({idEstudiante: idEstudiante})
    }).then((response) => response.json());
  },
  updatEstudiante(body) {
    return fetch(requestUrl, {
      method: "PUT",
      headers:myHeaders,
      body: JSON.stringify(body),
    }).then((response) => response.json());
  },
  register(body) {
    return fetch(requestUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  },
};

export const obtenerEstudiante = async idEstudiante => 
{
  try {
    const resultado = await fetch(`${requestUrl}/${idEstudiante}`);
    const instructor = await resultado.json();
    //console.log(instructor);
    return instructor;
  } catch (error) {
    console.log(error);
  }
}

export default estudianteService;