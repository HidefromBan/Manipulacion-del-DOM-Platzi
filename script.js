const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#calcular');
const result = document.querySelector('#result');
const btn2 = document.querySelector('#suma')
const form = document.querySelector('#form');

form.addEventListener('submit',concatenar)

function concatenar(event){
    /* console.log({event}) */
    event.preventDefault();
    let concatenar = input1.value + input2.value;
    result.innerText = `El resultado es ${concatenar}` 
}

function suma(){
    let suma = Number(input1.value) + Number(input2.value)
    result.innerText = `La suma de los numeros es ${suma}`
}

