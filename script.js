let pantalla = document.getElementById("pantalla");
let nuevo = false;

function agregar(valor) {
    if (nuevo) {
        pantalla.value = "";
        nuevo = false;
    }
    pantalla.value += valor;
}

function calcular() {
    let resultado = eval(pantalla.value);
    pantalla.value = pantalla.value + " = " + resultado;
    nuevo = true;
}


function limpiar() {
    pantalla.value = "";
}