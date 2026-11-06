
const boton = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

const mensajes = [
    "¡La innovación comienza con una idea!",
    "La tecnología transforma la manera en que vivimos.",
    "Cada línea de código puede ser el inicio de algo grande.",
    "La informática conecta personas, ideas y soluciones."
];

let indice = 0;

boton.addEventListener("click", () => {
    mensaje.textContent = mensajes[indice];
    indice = (indice + 1) % mensajes.length;
});
