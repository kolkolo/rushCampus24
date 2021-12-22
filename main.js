function cambiarPagina(botonPulsado)
{
    switch(botonPulsado)
    {
        case 'datos':
            console.log("Has intentado cambiar a datos");
            document.getElementById("frameSubPagina").src = "Pagina1.html";
            break;
        case 'formacion':
            console.log("Has intentado cambiar a formacion");
            document.getElementById("frameSubPagina").src = "Pagina2.html";
            break;
        case 'contacto':
            console.log("Has intentado cambiar a contacto");
            document.getElementById("frameSubPagina").src = "Pagina3.html";
            break;
    }
}