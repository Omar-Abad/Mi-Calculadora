const displayValorAnterior = document.getElementById('valor-anterior');
// Obtiene el elemento del DOM con el id 'valor-anterior' y lo asigna a la constante 'displayValorAnterior'
const displayValorActual = document.getElementById('valor-actual');
// Obtiene el elemento del DOM con el id 'valor-actual' y lo asigna a la constante 'displayValorActual'
const botonesNumeros = document.querySelectorAll('.numero');
// Obtiene todos los elementos del DOM con la clase 'numero' y los asigna a la constante 'botonesNumeros' como una NodeList
const botonesOperadores = document.querySelectorAll('.operador');
// Obtiene todos los elementos del DOM con la clase 'operador' y los asigna a la constante 'botonesOperadores' como una NodeList
const display = new Display(displayValorAnterior, displayValorActual);
// Crea una nueva instancia del objeto 'Display' pasando los elementos 'displayValorAnterior' y 'displayValorActual' como argumentos
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
// Itera sobre cada elemento de 'botonesNumeros' y añade un event listener que llama al método 'agregarNumero' del objeto 'display'
// con el contenido HTML del botón como argumento cuando se hace clic en él
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});
// Itera sobre cada elemento de 'botonesOperadores' y añade un event listener que llama al método 'computar' del objeto 'display'
// con el valor del botón como argumento cuando se hace clic en él
