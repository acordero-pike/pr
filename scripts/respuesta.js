const URLCom = "https://25.18.168.1/api/Comentario"
const headers = {
    'Accept' : "application/json",
    "Content-Type": "application/json",
  };
  const ComentarioService = {
    getComentarios(idcurs) {
      return fetch(URLCom+'/'+idcurs, {
        method: "GET",
      }).then((response) => response.json());
    },
    deleteComentarios(IdComentario) {
      return fetch(URLCom, {
        method: "DELETE",
        headers,
        body: JSON.stringify({IdComentario: IdComentario})
      }).then((response) => response.json());
    },
    updateComentarios(body) {
      console.info(body);
      return fetch(URLCom, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      }).then((response) => response.json());
    },
    guardarComentarios(body) {
      return fetch(URLCom, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }).then((response) => response.json());
    },
  };
  