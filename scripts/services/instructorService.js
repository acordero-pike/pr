const requestUrl = `${URL}/instructores`
let token=null;
let prearray = JSON.parse( localStorage.getItem('Llave') ) || []  ;
prearray.forEach( ar =>  {  token =ar.token})

  const myHeaders = new Headers();

myHeaders.append('Authorization', `Bearer ${token}  `);
myHeaders.append('Content-Type', 'application/json');  
const instructorService = {
  getInstructores(idInstructor) {
    return fetch(`${requestUrl}/${idInstructor}`, {
      method: "GET",
  
    }).then((response) => response.json(),
    console.log(response));
  },
  deleteInstructor(idInstructor) {
    return fetch(requestUrl, {
      method: "DELETE",
      headers:myHeaders,
      body: JSON.stringify({idInstructor: idInstructor})
    }).then((response) => response.json());
  },
  updateInstructor(body) {
    console.info(body);
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

 export const obtenerInstructor = async idInstructor => 
{
  try {
    const resultado = await fetch(`${requestUrl}/${idInstructor}`);
    const instructor = await resultado.json();
    //console.log(instructor);
    return instructor;
  } catch (error) {
    console.log(error);
  }
}

export default instructorService;
