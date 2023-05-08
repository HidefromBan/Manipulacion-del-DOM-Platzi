/*
PARTE 1) Variables y operaciones.
 
1.- Una variable puede considerarse como un contenedor para almacenar datos. Sirve para guardar un espacio en memoria.

2. La diferencia entre ambas es que al declarar, asigno un espacio en memoria para una variable, y al inicializarle se le asigna un valor a dicha variable.

3. La diferencia es que para sumar números solo necesitas utilizar operadores matemáticos. y la concatenación de strings es unir uno tras de otro.


4- El operador "+" permite sumar y al concatenar strings necesitamos unirlos con un + y un espacio en blanco " ".

II) Determinar el nombre y tipo de dato para almacenar variables de la siguiente información.

- Nombre: ----------------------> String
- Apellido:---------------------> String
- Nombre de usuario en Platzi---> String
- Edad: ------------------------> Number
- Correo electrónico:-----------> String
- Mayor de edad:----------------> Boolean
- Dinero Ahorrado:--------------> Number 
- Deudas------------------------> Number

III) Traduce a código JS las variables del ejemplo anterior y deja tu código en los comentarios.
*/

var nombre = "Joshua";
var apellido = "Espindola";
var nombreDeUsuario = "Hidefromban";
var edad = 26;
var correo= "joshuaespindola@gmail.com";
var mayorDeEdad = true;
var dineroAhorrado = 10000;
var deudas= 2000;

/* 
IV) Calcula e imprime las siguientes variables a aprtir de las variables del ejemplo anterior:
*/

var dineroReal = dineroAhorrado - deudas;
var nombreCompleto = nombre + " " + apellido;

console.log(`Tu nombre es ${nombreCompleto}, y tu dinero real es ${dineroReal}`)


/* 
PARTE 2) Funciones..

    - Que es una función?
     r: Una función es un bloque de código que permite repetir una acción para poder simplificar código.

    -Cuando me sirve usar una función en mi código?
     r: Cuando necesites repetir una acción más de una vez, es conveniente utilizar una función.

    -Cual es la diferencia entre parámetros y argumentos de una función?
     r: Los parámetros son los nombres que aparecen en la definición de una función, en cambio los argumentos son los valores que se le pasaran a la función para que opere.

 Convertir el siguiente código a una función, pero cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función.
*/

function nombreNickname (name,lastname,nickname){
    var completeName = name +" "+ lastname;
    return `Tu nombre es ${completeName}, pero prefieres que te digan ${nickname}`
}


/* 
PARTE 3) CONDICIONALES.

-   Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de la condicion o validacion 
-   Existen los condicionales if,switch. El if permite hacer validaciones completamente distintas, en cambio en el switch todos los casos se comparan con la misma variable o condición que definimos en el switch.
-   Sí se pueden combinar funciones junto con condicionales.

2. Replicar el comportamiento del siguiente código que usa la sentencia switch utilizando if,else y else if.
*/

var tipodeSuscripción = "Basic"

if(tipodeSuscripción == "Free"){
    console.log("Solo puedes tomar los cursos gratis")
}else if(tipodeSuscripción == "Basic"){
    console.log("Puedes tomar casi todos os cursos de Platzi durante un mes")
}else if(tipodeSuscripción == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
}else if(tipodeSuscripción == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.")
}else {console.log("Necesitas tener una suscripcion activa a Platzi para poder acceder a los cursos.")}




/* 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahroa solo con (if) SIN ELSE NI ELSE IF */

function conseguirTipoSuscripcion(suscripcion){
if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    return;
}
if (suscripcion == "Basic") {
console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
return;
}
if (suscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
}
if (suscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
}
console.warn("Ese tipo de susripcion no existe.")
}

/* BONUUUUUUUUUSSSSSS :
Si ya eres una experto te retamos a replicar el siguiente comportamiento pero con arrays y/o objetos, y un solo condicional.
2
*/

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertplus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'

};

function conseguirSub(subs){
    if (tiposDeSuscripciones[subs]){
        console.log(tiposDeSuscripciones[subs]);
        return;
    }
    console.warn("Ese tipo de suscripcion no existe.")
}


/* Creo un objeto con las suscripciones y el mensaje de cada .
En la función utilizo la variable subs que sera donde estara guardada el tipo de   subs de ejemplo y hare un console.log del objeto con el nombre de la persona . sino
mostrar mensaje de que la subs no existe.
*/


/* PARTE 4) Ciclos. 
------------

-   ¿Qué es un ciclo?
        r: Es una estructura de control que permite repetir instrucciones mientras una condición sea verdadera.

-  ¿Qué tipos de ciclos existen en JS?
        r: Existe el ciclo for y el ciclo while.

-   Qué es un ciclo infinito y porque es un problema?
        r: Un ciclo infinito es cuando no se realiza una acción para abandonar el ciclo y queda repitiendose constantemente, es un problema porque genera mucho consumo de recursos y memoria.

-   ¿Puedo mezclar ciclos y condicionales?.
        r: Sí claro que se pueden mezclar ciclos y condicionales, según se requiera en el código.

2) Replica el comportamiento de los siguientes ciclos usando ciclos while. */

var i = 0;

while(i<5){
    i++;
    console.log(`El valor de i es : ${i}`)
}

let j = 10;
while(j>=2){
    console.log(`El valor de j es : ${j}`)
    j--;
}

var respuesta= prompt("¿Cuanto es 2 + 2 ?")
if(respuesta == 4){
    alert("Has respondido bien, la respuesta es 4")
}else {alert("Esa no es la respuesta, vuelve a intentarlo")}



/* 

PARTE 5) LISTAS.


5.1) ¿Qué es un array?.
    r: Es un contenedor de información de tipo objeto, donde se puede almacenar todo tipo de dato en él.
    lista de elementos.

5.2) ¿Qué es un objeto?.
    r: Es un contenedor de información al igual que el array, con la diferencia en que el objeto consta con nombre clave, y al mismo se le asigna una propiedad o valor

    const obj={
        nombre:"Fulanito",
        edad: 3,
        comidasFavoritas: ["pollo frito","vegetales"]
    }

5.3) ¿Cuándo es mejor usar objetos o arrays?.
    r: Arrays cuando lo que haremos en un elemento, es lo mismo que en todos los demás.(la regla se puede incumplir). Mientras que unn objeto cuando lsos nombres de cada elementos son importantes para nuestro algoritmo.


5.4) ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    r: Sí se puede mezclar arrays que contengan objetos, tanto como objetos que contengan arrays. todo depende del caso.


5.5) Crea una función que pueda recivir cualquier array como parametro e imprima su primer elemento.
*/
var obj = [1, 2, 3, 4, 5, 6, 7, "hola","kelokmiloko"]

function recibirArray(array){
    let i = 0;
    console.log(array[i])
}
recibirArray(obj)

/* Crea una función que pueda recibir cualquier array como parametro e imprima todos sus elementos uno por uno */

function imprimirArray(array){
    for(let i= 0;i<array.length;i++){
        console.log(array[i])
    }
}

/* Crea una función que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno.
 */

var articulos={
    raza: "sayayin",
    estado: "ssj1",
    edad: 40
}

function impimirObj(obj){
    for(let element in obj){
        console.log(obj[element])
    }
}


/* SOLUCION A ANALIZAR.

let goku = {
    raza: "saiyayin",
    estado: "ssj1",
    edad: 40
}

function objetos(objeto) {
    for (const propiedad in objeto) {
        console.log(`${propiedad}: ${objeto[propiedad]}`);
      }
}

objetos(goku); 
*/