const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parraf = document.querySelector('.parraf')
const pid = document.getElementById('pid')
const input =document.querySelector('input')


console.log(input.value);
console.log( {
    h1,p,parraf,pid,input
})

h1.innerText = 'El nuevo parrafo desde <br> Javascript'
p.innerHTML = 'El nuevo parrafo desde JS '

/* console.log(h1.getAttribute('pantalla'))
h1.setAttribute('class','rojo') */

h1.classList.add('rojo')
h1.classList.remove('verdezoli')

/* h1.classList.toggle()
h1.classList.contains() */

input.value = 'Ingrese su texto aqui.'

const img = document.createElement('img');
img.setAttribute('src', 'https://static.wikia.nocookie.net/dragonball/images/c/cf/Goku_Saiyan_4_Ultram%C3%A1ximo_Poder_Dokkan.png/revision/latest/thumbnail/width/360/height/450?cb=20190802155947&path-prefix=es')

pid.innerHTML = '   '
pid.append(img)

console.log(img)