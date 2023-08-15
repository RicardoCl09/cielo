function moverBoton() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random() * height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";
}

function accionCuandoDigaSi() {
    const respuesta = confirm("¿Estás segura de que quieres ser mi novia?");
    if (respuesta) {
        window.location.href = "opcionSi.html";
    } 
}