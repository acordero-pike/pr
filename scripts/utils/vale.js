document.addEventListener('DOMContentLoaded', () => {
    prearray = JSON.parse( localStorage.getItem('Llave') ) || []  ;
   
    

    if (prearray.length >0)
{
 window.location.href="../pages/index.html";
}else{
    window.location.href="../pages/Home.html";
}
})
