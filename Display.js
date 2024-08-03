class Display {
    // Define la clase Display que manejará la lógica de la interfaz de la calculadora
    constructor(displayValorAnterior, displayValorActual) {
        // Constructor que inicializa los atributos del objeto Display
        this.displayValorActual = displayValorActual;
        // Asigna el elemento del display actual al atributo del objeto
        this.displayValorAnterior = displayValorAnterior;
        // Asigna el elemento del display anterior al atributo del objeto
        this.calculador = new Calculadora();
        // Crea una nueva instancia del objeto Calculadora
        this.tipoOperacion = undefined;
        // Inicializa el tipo de operación como indefinido
        this.valorActual = '';
        // Inicializa el valor actual como una cadena vacía
        this.valorAnterior = '';
        // Inicializa el valor anterior como una cadena vacía
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
        };
        // Define un objeto que mapea los nombres de las operaciones a sus signos correspondientes
    }
    borrar() {
        // Método para borrar el último dígito del valor actual
        this.valorActual = this.valorActual.toString().slice(0, -1);
        // Elimina el último carácter del valor actual
        this.imprimirValores();
        // Actualiza los valores mostrados en el display
    }
    borrarTodo() {
        // Método para borrar todos los valores y restablecer la operación
        this.valorActual = '';
        // Restablece el valor actual a una cadena vacía
        this.valorAnterior = '';
        // Restablece el valor anterior a una cadena vacía
        this.tipoOperacion = undefined;
        // Restablece el tipo de operación a indefinido
        this.imprimirValores();
        // Actualiza los valores mostrados en el display
    }
    computar(tipo) {
        // Método para ejecutar una operación
        this.tipoOperacion !== 'igual' && this.calcular();
        // Si el tipo de operación no es 'igual', realiza el cálculo
        this.tipoOperacion = tipo;
        // Asigna el tipo de operación actual
        this.valorAnterior = this.valorActual || this.valorAnterior;
        // Asigna el valor actual al valor anterior si el valor actual no está vacío, de lo contrario mantiene el valor anterior
        this.valorActual = '';
        // Restablece el valor actual a una cadena vacía
        this.imprimirValores();
        // Actualiza los valores mostrados en el display
    }
    agregarNumero(numero) {
        // Método para agregar un número al valor actual
        if (numero === '.' && this.valorActual.includes('.')) return;
        // Si el número es un punto y el valor actual ya contiene un punto, no hace nada
        this.valorActual = this.valorActual.toString() + numero.toString();
        // Agrega el número al valor actual convirtiéndolo a cadena
        this.imprimirValores();
        // Actualiza los valores mostrados en el display
    }
    imprimirValores() {
        // Método para mostrar los valores en el display
        this.displayValorActual.textContent = this.valorActual;
        // Muestra el valor actual en el elemento del display actual
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        // Muestra el valor anterior y el signo de la operación en el elemento del display anterior
    }
    calcular() {
        // Método para realizar el cálculo de la operación
        const valorAnterior = parseFloat(this.valorAnterior);
        // Convierte el valor anterior a un número flotante
        const valorActual = parseFloat(this.valorActual);
        // Convierte el valor actual a un número flotante
        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        // Si cualquiera de los valores no es un número, no hace nada
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
        // Realiza la operación utilizando el método correspondiente de la calculadora y asigna el resultado al valor actual
    }
}
