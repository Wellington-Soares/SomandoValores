/*Documento JavaScript*/

function somar(){
    let txtnumero1 = document.getElementById('txtn1');
    let txtnumero2 = document.getElementById('txtn2');
    let resultado = document.getElementById('mostrarResultado');

    let numero1 = parseFloat(txtnumero1.value);
    let numero2 = parseFloat(txtnumero2.value);
    let soma = numero1 + numero2; 

    resultado.innerText = (soma);
}