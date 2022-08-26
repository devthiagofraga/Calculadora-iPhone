function insert(numero) {
    var numero2 = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero2 + numero;
}

function botaoLimpar() {
    document.getElementById('resultado').innerHTML = "";
}
function botaoVirgula() {
    document.getElementById('resultado').innerHTML = ",";
}

function calculo() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

function trocaValor() {

    document.getElementById('resultado').innerHTML = input * -1;
}