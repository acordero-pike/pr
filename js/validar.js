


document.addEventListener('onload', () => {
    prearray = JSON.parse( localStorage.getItem('Llave') ) || []  ;
   
    

    if (prearray.length >0)
{

}else{
    window.location.href="../pr/index.html";
}
})
   

