const cardListElement = document.getElementById("cardList");
const modalButton = document.getElementById("modalButton");
const submitButton = document.getElementById("submitButton");
const closeModalButton = document.getElementById("closeModalButton");
const form = document.getElementById("form");
 const parametrosURL = new URLSearchParams(window.location.search);
   const idcurs = parseInt( parametrosURL.get('id') );

let currentLeccion = null;
let lecciones = [];


const setLeccionesValuesToForm = (leccionn) => {
  const { titulo, descripcion, duracion, enlaceVideo, idCurso } =
    form.elements;
console.log(leccionn);
titulo.value = leccionn.titulo;
descripcion.value = leccionn.descripcion;
duracion.value = leccionn.duracion;
enlaceVideo.value = leccionn.enlaceVideo;
idCurso.value = idcurs;
};


const openModalEdit = (index) => {
  currentLeccion = lecciones[index];
  console.log(currentLeccion)
  setLeccionesValuesToForm(currentLeccion);
  modalButton.click();
};


const openModalAdd = () => {
  currentLeccion = null;
 const { titulo, descripcion, duracion, enlaceVideo, idCurso } =
    form.elements;
  titulo.value = "";
descripcion.value ="";
duracion.value = "";
enlaceVideo.value = "";
idCurso.value = idcurs;
  modalButton.click();
};


const deleteLeccion = (index) => {
  LeccionService.deleteLecciones(lecciones[index].idLeccion)
    .then(() => setLecciones())
    .catch(console.error);
};


const insertLeccionIntoDom = (lecc, index) => {
  console.log(lecc.idLeccion);
  const card = `
    <div class="card col-4 mx-1">
          <div class="card-body">
            <h5 class="card-title" hideen>Id Leccion: ${lecc.idLeccion}</h5>
            <h5 class="card-title">Titulo:${lecc.titulo}</h5>
            <h5 class="card-title">Descripcion: ${lecc.descripcion}</h5>
            <h5 class="card-title"> Duración:${lecc.duracion} minutos</h5>
            <h5 class="card-title">Enlace:${lecc.enlaceVideo}</h5>
            <h5 class="card-title" hidden>Id Curso: ${lecc.idCurso} hrs</h5>
            
            <button onclick="openModalEdit(${index})" class="btn btn-primary"> Editar </button>
            <button onclick="deleteLeccion(${index})" class="btn btn-danger"> Eliminar </button>
          </div>
        </div>
    `;
  cardListElement.innerHTML += card;
};


const setLecciones = async () => {
  cardListElement.innerHTML = "";
  const dataLeccion = await LeccionService.getLecciones(idcurs);
  lecciones = dataLeccion;
  lecciones.forEach((leccion, index) => insertLeccionIntoDom(leccion, index));
};


getFormData = () => {
  const { titulo, descripcion, duracion, enlaceVideo, idCurso } =
    form.elements;
  
    console.log(form.elements);
  return {
    Titulo: titulo.value,
    Descripcion: descripcion.value,
    Duracion: duracion.value,
    EnlaceVideo: enlaceVideo.value,
    IdCurso: idCurso.value,
  };
};

document.addEventListener("DOMContentLoaded", () => setLecciones());

closeModalButton.addEventListener("click", () => form.reset());


submitButton.addEventListener("click", () => {
  let formData = getFormData();
  if (currentLeccion === null) {
    LeccionService.guardarLecciones(formData)
      .then(() => closeModalButton.click())
      .catch(console.error)
      .finally(() => setLecciones());
  } else {
    formData = { ...formData, idLeccion: currentLeccion.idLeccion };
    LeccionService.updateLecciones(formData)
      .then(() => closeModalButton.click())
      .catch(console.error)
      .finally(() => setLecciones());
  }
});
