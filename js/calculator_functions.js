'use strict'

//Actualiza la pantalla de la calculadora, poniendo el valor que se pase como parámetro
function setResult(value) {
    document.getElementById('result').innerHTML = value;
}

//Obtiene el valor del último resultado obtenido, o de la expresión matemática que se calculará, y se está visualizando en la pantalla de calculadora.
function getResult() {
    return(document.getElementById('result').innerHTML);
}

//Añade a la pantalla lo pulsado.
//Las condiciones son por si ya contiene algún dato o se quiere agregar algo distinto
//Si la pantalla está vacía, entonces añade lo digitado
function add_number(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}

//Borrar lo de la pantalla
function delete_display () { 
    setResult(0);
}

//Realiza el cálculo de la operación solicitada
function calc (){
    var result = eval (getResult());
    setResult (result);
}