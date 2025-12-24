const boton = document.getElementById("boton");
const contenedor_fuentes = document.getElementById("contenedor_fuentes");
    
boton.addEventListener("click", () => {
    if (contenedor_fuentes.style.maxHeight) {
    // Si está abierto, cerrar
        contenedor_fuentes.style.maxHeight = null;
    } else {
    // Si está cerrado, abrir
        contenedor_fuentes.style.maxHeight = contenedor_fuentes.scrollHeight + "px";
    }
});