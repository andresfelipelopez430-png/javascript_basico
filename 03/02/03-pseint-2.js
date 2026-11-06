//===================================================================
//EJERCICIO 3 - SUMAR 4 VALORES Y RESTAR EL ULTIMO 
//Leer 4 valores, sumarlos y a la suma  restarle el ultimo valor.
//==================================================================

//Buscamos en el html los 4 inputs y la caja del resultado (por su id).
const inputprimero = document.getElementById("primerValor");
const inputsegundo = document.getElementById("segundoValor");
const inputtercero = document.getElementById ("tercerValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    //Si falta algun valor no se calcula.
    if (inputprimero.value === "" || inputsegundo.value === "" || inputtercero.value === "" || inputcuarto.value === "") {
        cajaResultado.textContent = "Escribe los 4 valores";
        return;
    }

    // Lo que se escribe  en un input es texto: Number() lo convierte en numero.
    const primerValor = Number(inputprimero.value);
    const segundoValor = Number(inputsegundo.value);
    const tercerValor = Number(inputtercero.value);

    //sumar los 4 valores.
    const sumaValores= primerValor + segundoValor + tercerValor + cuartoValor;

    // A la suma se le resta el cuarto valor
    const resultadoResta = sumaValores - cuartoValor;

    //Mostrar los resultados en la página.
    cajaResultado.innerHTML =
    " Suma de los 3 valores: <b>" + sumaValores + "</b><br" +
}

// Cada vez que se escribe  en cualquiera de los inputs, se vuelve a calcular.
inputprimero.addEventListener("input", calcular);
inputsegundo.addEventListener ("input", calcular);
inputtercero.addEventListener ("input", calcular);